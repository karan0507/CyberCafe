import { Component, OnInit } from '@angular/core';
import { DatabaseServiceService } from '../database-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  srno = 'SR NO';
  name = 'Name';
  description = 'description';
  quantity = 'quantity';
  price = 'Price';
  remark = 'remark';

 

  inventory; // Inventory Object
  constructor(private db: DatabaseServiceService, private router: Router) { }

  ngOnInit() {
    this.listInventory();
  }

  listInventory() {
    this.db.getAllInventory().subscribe(
      res => {
        console.log(res);
        this.inventory = res;
      });
  }
}
