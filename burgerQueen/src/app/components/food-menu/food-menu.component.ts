import { Component, OnInit } from '@angular/core';
import { FoodMenuService } from './food-menu.service';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {

  result :any[] = [];

  constructor(public food : FoodMenuService, public order: OrderService){
    this.food.foodMenu()
    .subscribe(resp=> {
      this.result=resp["menu"]
      console.log(resp)
    })
  }

  ngOnInit(): void {
  }

  press(item){
    this.order.order.push(item)
  }

  /*priceTotal=item.price
  total(priceTotal){
    this.priceTotal
  }
  total(item): void {
    this.item;
    this.priceTotal += item.price;
    if(this.)

  }*/
}
