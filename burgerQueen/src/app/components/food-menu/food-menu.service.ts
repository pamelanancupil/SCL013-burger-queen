import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class foodMenuService{

info: any={};
loaded=false;

    constructor(private http: HttpClient) {
        console.log("servicio corriendo");
        http.get('../../assets/JSON/data.json')
        .subscribe(resp=> {
            this.info=resp;
            this.loaded=true;

        });
    }

}