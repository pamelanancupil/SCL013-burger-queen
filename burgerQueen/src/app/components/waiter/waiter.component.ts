import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {

  showFood:boolean=true;
  showDrinks:boolean=false;

 constructor() { }

  ngOnInit(): void {
  }
  
}
