import { Component, OnInit } from '@angular/core';

import * as menu from '../../../assets/JSON/data.json';
//const menu = require ('../../../assets/JSON/data.json');


@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {

  data: any = menu;
  
  
  constructor() { }
  mostrarMenu(){
    console.log(menu)
    console.log(this.data)
  }
  ngOnInit(): void {
    console.log(menu)
    console.log(this.data)
  }

}
