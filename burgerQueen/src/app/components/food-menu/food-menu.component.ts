import { Component, OnInit } from '@angular/core';
import { FoodMenuService } from './food-menu.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {

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
