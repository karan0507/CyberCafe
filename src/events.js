const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', () => {
    console.log('a user is connected')
})

function createRouter(db) {
    const router = express.Router();
    const owner = '';
    console.log("I am getting called");

    // the routes are defined here

    // the routes are defined here



    // Write create Table queries directly here 

    let id;
    // Write all CRUD Operations with router.post()/router.get() and etc
    router.post('/login', (req, res, next) => {
        console.log("accessed event");
        db.query(
            'INSERT INTO login (username,password) VALUES (?,?)', [req.body.username, req.body.password],
            (error) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'adsadasdas' });
                } else {
                    res.status(200).json({ status: 'ok' });
                }
            }
        );
    });

    router.get('/login', function(req, res, next) {
        db.query(
            'SELECT  username, password FROM login ',
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json(results);
                }
            }
        );
    });

    // router.post('/customer', (req, res, next) => {
    //     console.log("accessed customer");
    //     db.query(
    //         'INSERT INTO customer (name, phone_no, address, profile_pic, id_proof, email_address, remark) VALUES (?,?,?,?,?,?,?)', [req.body.name, req.body.phone_no, req.body.address, req.body.profile_pic, req.body.id_proof, req.body.email_address, req.body.remark],
    //         (error, result) => {
    //             if (error) {
    //                 console.error(error);
    //                 res.status(500).json({ status: 'adsadasdas' });
    //             } else {
    //                 res.status(200).json({ status: 'ok', });

    //             }

    //         });

    // });

    router.post('/customer', (req, res, next) => {
        db.beginTransaction(function(err) {
            if (err) { throw err; }
            db.query('INSERT INTO customer (name, phone_no, address, profile_pic, id_proof, email_address, remark) VALUES (?,?,?,?,?,?,?)', [req.body.name, req.body.phone_no, req.body.address, req.body.profile_pic, req.body.id_proof, req.body.email_address, req.body.remark], function(error, results, fields) {
                if (error) {
                    return db.rollback(function() {
                        throw error;
                    });
                }

                //  var log = 'Post ' + results.insertId + ' added';

                db.query('INSERT INTO transaction (type, debit_bal,credit_bal,bal,cid) VALUES (?,?,?,?,?)', ['none', '0', '0', '0', results.insertId], function(error, results, fields) {
                    if (error) {
                        return db.rollback(function() {
                            throw error;
                        });
                    }
                    db.commit(function(err) {
                        if (err) {
                            return db.rollback(function() {
                                throw err;
                            });
                        }
                        console.log('success!');
                    });
                });
            });
        });
    });
    //



    // Get Users With last transaction
    router.get('/last_trans', function(req, res, next) {
        db.query(
            'SELECT id as cust_id,name,address,phone_no,email_address,max(tid) as maxtid from customer INNER JOIN transaction on customer.id = transaction.cid group by customer.id; ', /* [req.params.id], */
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json(results);
                }
            }
        );
    });


    //

    router.post('/trans', (req, res, next) => {
        console.log("accessed customer");
        db.query('INSERT INTO transaction (type, debit_bal,credit_bal,bal,cid) VALUES (?,?,?,?,?)', ['none', '0', '0', '0', result.insertId],
            (error, result) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'ok' });
                    console.log(result);
                }
            });
    });

    /*

    */
    /* 
    db.query('INSERT INTO transaction (type, debit_bal,credit_bal,bal,cid) VALUES (?,?,?,?,?)'), ['none', '0', '0', '0', result.insertId],
                                (error) => {
                                    if (error) {
                                        console.error(error);
                                        res.status(500).json({ status: 'error' });
                                    } else {
                                        res.status(200).json({ status: 'ok' });
                                        console.log('jigi' + result);
                                    }
                                }

    */
    router.get('/customer', (req, res, next) => {
        console.log("accessed customer");
        db.query(
            'Select * FROM customer',
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json(results);
                    io.emit('Data of Customers', results);
                }
            }
        );
    });

    // get customer by id

    router.get('/customer/:id', function(req, res, next) {
        db.query(
            'SELECT * max(tid) FROM customer WHERE id=? ', [req.params.id],
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json(results);
                }
            }
        );
    });

    router.delete('/customer/:id', function(req, res, next) {
        db.query(
            'DELETE FROM customer WHERE id=?', [req.params.id],
            (error) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'ok' });
                }
            }
        );
    });

    router.put('/customer/:id', function(req, res, next) {
        db.query(
            'UPDATE customer SET name=?, phone_no=?, address=?, profile_pic=?, id_proof=?, email_address=?, remark=? WHERE id=? ', [req.body.name, req.body.phone_no, req.body.address, req.body.profile_pic, req.body.id_proof, req.body.email_address, req.body.remark, req.params.id],
            (error) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'ok' });
                }
            }
        );
    });



    // Transactions
    router.post('/transaction', (req, res, next) => {
        console.log('database transaction called');
        db.query(
            'INSERT INTO transaction (type, debit_bal,credit_bal,bal,cid) VALUES (?,?,?,?,?)', [req.body.type, req.body.debit_bal, req.body.credit_bal, req.body.bal, req.body.cid],
            (error) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'adsadasdas' });
                } else {
                    res.status(200).json({ status: 'ok' });
                }
            }
        );
    });



    router.get('/cust_trans', function(req, res, next) {
        db.query(
            'SELECT * from transaction INNER JOIN customer on transaction.cid = customer.id ', /* [req.params.id], */
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json(results);
                }
            }
        );
    });

    // Transactions End




    //  
    router.get('/activeUsers', function(req, res, next) {
        db.query(
            'SELECT * FROM active_users inner join customer on active_users.cust_id = customer.id inner join transaction on active_users.tran_id = transaction.tid', /* [req.params.id], */
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json(results);
                }
            }
        );
    });

    router.post('/addActiveUsers', function(req, res, next) {
        db.query(
            'Insert into active_users (cust_id, tran_id, status) VALUES (?,?,"active")', [req.body.cust_id, req.body.maxtid], /* [req.params.id], */
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json(results);
                }
            }
        );
    });


    router.delete('/deleteActiveUsers/:id', function(req, res, next) {
        console.log('transaction deleting');
        db.query(
            'DELETE FROM active_users WHERE active_id=? ', [req.params.id],
            (error) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'ok' });
                }
            }
        );
    });

    //
    router.get('/event', function(req, res, next) {
        db.query(
            'SELECT id, name, description, date FROM events WHERE owner=? ORDER BY date LIMIT 10 OFFSET ?', [owner, 10 * (req.params.page || 0)],
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json(results);
                }
            }
        );
    });
    router.put('/event/:id', function(req, res, next) {
        db.query(
            'UPDATE events SET name=?, description=?, date=? WHERE id=? AND owner=?', [req.body.name, req.body.description, new Date(req.body.date), req.params.id, owner],
            (error) => {
                if (error) {
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'ok' });
                }
            }
        );
    });

    router.delete('/event/:id', function(req, res, next) {
        db.query(
            'DELETE FROM events WHERE id=? AND owner=?', [req.params.id, owner],
            (error) => {
                if (error) {
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'ok' });
                }
            }
        );
    });

    return router;

}

module.exports = createRouter;