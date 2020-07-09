import { Component, OnInit } from '@angular/core';

//import * as food from '../../../assets/JSON/data.json';
import { FoodMenuService } from './food-menu.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {
  
  //data: any = menu;
  result :any[] = [];  

  constructor(private food : FoodMenuService){
    this.food.foodMenu()
    .subscribe(resp=> {
      this.result=resp["menu"]
      console.log(resp)
      /*this.info=resp;
      console.log(this.info)
      this.loaded=true;*/
  
  })
    
  }

  //constructor() { }
  //mostrarMenu(){
  
  //}
  ngOnInit(): void {
    
   // console.log(food.menu[0].img, "menu")
   
  //console.log(menu.info.img)
   // console.log(menu)
   // console.log(this.data)
  }

}
