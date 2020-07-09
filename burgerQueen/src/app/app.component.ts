import { Component } from '@angular/core';
import { FoodMenuService } from './components/food-menu/food-menu.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'burgerQueen';

constructor(public food: FoodMenuService){
  
}

}
