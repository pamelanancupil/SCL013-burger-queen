import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class FoodMenuService{

info: any={};
loaded=false;

    constructor(private http: HttpClient) {
        console.log("servicio corriendo");
        
    }
    foodMenu(){
      return this.http.get('../../assets/JSON/data.json')
    }

}
/*.subscribe(resp=> {
    this.info=resp;
    console.log(this.info)
    this.loaded=true;

}); */