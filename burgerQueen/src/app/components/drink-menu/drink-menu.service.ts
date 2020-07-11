import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DrinkMenuService{

info: any={};
loaded=false;

    constructor(private http: HttpClient) {
        console.log("servicio corriendo");
        
    }
    drinksMenu(){
      return this.http.get('../../assets/JSON/drinks.json')
    }

}