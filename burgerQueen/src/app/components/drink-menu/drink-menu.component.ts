import { Component, OnInit } from '@angular/core';
import { FoodMenuService } from '../food-menu/food-menu.service';

@Component({
  selector: 'app-drink-menu',
  templateUrl: './drink-menu.component.html',
  styleUrls: ['./drink-menu.component.css']
})
export class DrinkMenuComponent implements OnInit {
  
  result :any[] = [];  

  constructor(private food : FoodMenuService){
    this.food.foodMenu()
    .subscribe(resp=> {
      this.result=resp["menu"]
      console.log(resp)
    })
  }
  ngOnInit(): void {
  }
}
