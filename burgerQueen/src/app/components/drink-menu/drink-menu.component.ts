import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DrinkMenuService } from '../drink-menu/drink-menu.service';

@Component({
  selector: 'app-drink-menu',
  templateUrl: './drink-menu.component.html',
  styleUrls: ['./drink-menu.component.css']
})
export class DrinkMenuComponent implements OnInit {

  @Output() cambio = new EventEmitter();
  
  result :any[] = [];  

  constructor(private drink : DrinkMenuService){
    this.drink.drinksMenu()
    .subscribe(resp=> {
      this.result=resp["drinks"]
      console.log(resp)
    })
  }
  ngOnInit(): void {
  }

press(){
  this.cambio.emit(this.result);
}

}
