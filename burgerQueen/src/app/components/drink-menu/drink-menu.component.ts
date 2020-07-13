import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DrinkMenuService } from '../drink-menu/drink-menu.service';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-drink-menu',
  templateUrl: './drink-menu.component.html',
  styleUrls: ['./drink-menu.component.css']
})
export class DrinkMenuComponent implements OnInit {

  @Output() cambio = new EventEmitter();
  
  result :any[] = [];  

  constructor(public drink : DrinkMenuService, public order: OrderService){
    this.drink.drinksMenu()
    .subscribe(resp=> {
      this.result=resp["drinks"]
      console.log(resp)
    })
  }
  ngOnInit(): void {
  }

press(item){
  this.order.order.push(item)
}

/*selectedHero: Hero;
press(item: Hero): void {
  this.selectedHero = item;
}*/

}
