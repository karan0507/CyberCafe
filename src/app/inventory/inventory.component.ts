import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  srno = 'SR NO';
  invname = 'Inventory Names';
  adduser = 'Add Inventory / Delete Inventory ';


  inventory; // Inventory Object
  constructor() { }

  ngOnInit() {
  }

}
