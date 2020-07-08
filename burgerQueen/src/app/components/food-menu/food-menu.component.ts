import { Component, OnInit } from '@angular/core';

import * as menu from '../../../assets/JSON/data.json';
import { foodMenuService } from './food-menu.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {

  //data: any = menu;

  constructor(public menu: foodMenuService){
    

  }
  
  
  //constructor() { }
  //mostrarMenu(){
  
  //}
  ngOnInit(): void {
    console.log(menu.menu[0].img, "menu")
   
  //console.log(menu.info.img)
   // console.log(menu)
   // console.log(this.data)
  }

}
