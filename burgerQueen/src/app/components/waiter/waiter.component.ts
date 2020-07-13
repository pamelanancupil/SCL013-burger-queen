import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {

  showFood:boolean=true;
  showDrinks:boolean=false;

  selectedProduct : Array<any> = [];

 constructor(public order:OrderService) { }

  ngOnInit(): void {
    this.selectedProduct=this.order.order;
  }
  
}
