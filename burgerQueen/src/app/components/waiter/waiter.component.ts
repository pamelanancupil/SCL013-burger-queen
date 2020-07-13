import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {

  showFood:boolean=true;
  showDrinks:boolean=false;

  selectedProduct : string = "";

 constructor() { }

  ngOnInit(): void {
  }
  
  funCambiar(e){
    console.log(e);
    this.selectedProduct = e;
  }

}
