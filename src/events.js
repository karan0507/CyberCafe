const express = require('express');

function createRouter(db) {
    const router = express.Router();
    const owner = '';
    console.log("I am getting called");

    // the routes are defined here
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

    router.post('/customer', (req, res, next) => {
        console.log("accessed customer");
        db.query(
            'INSERT INTO customer (name, phone_no, address, profile_pic, id_proof, email_address) VALUES (?,?,?,?,?,?)', [req.body.name, req.body.phone_no, req.body.address, req.body.profile_pic, req.body.id_proof, req.body.email_address],
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