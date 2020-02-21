import { Component, OnInit } from '@angular/core';
import { DatabaseServiceService } from '../database-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

 inventoryform: FormGroup;


  inventory; // Inventory Object
  constructor(private db: DatabaseServiceService, private router: Router, private fb: FormBuilder) {
    this.inventoryform = this.fb.group({
      invname: ['', [Validators.required]],
      invdisc: ['', [Validators.required]],
      invqty: ['', [Validators.required]],
      invprice: ['', [Validators.required]],
      invremark: ['', [Validators.required]]

  });
   }

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

  addInventory() {
    this.db.addInventory(this.inventoryform.value).subscribe(res => {
      console.log(res);
      this.listInventory();
    });
  }
}
