import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/order.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ConnectionService } from 'src/app/connection.service';
import { compileComponentFromMetadata } from '@angular/compiler';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {

  showFood:boolean=true;
  showDrinks:boolean=false;

  selectedProduct : Array<any> = [];

  commands: Observable<any[]>;

  command:any = {
    name:"",
    table:"",
    commentary:"",
    selectedProduct:[]= this.order.order,
  };

 constructor(public order:OrderService, db : AngularFirestore, private connection:ConnectionService) {
  this.commands = db.collection('commands').valueChanges();
 }

  ngOnInit(): void {
    this.selectedProduct = this.order.order;
    console.log("select",this.selectedProduct)
  }

  // AGREGAR COMANDA A LA COLECCIÓN
  add(){
    this.connection.addCommand(this.command);
    this.command.name='';
    this.command.table='';
    this.command.commentary='';
    this.command.selectedProduct= this.selectedProduct;
    console.log("funcionando",this.command.selectedProduct)
  }

  // CANCELAR PEDIDO
  cancel(){
    this.command.name='';
    this.command.table='';
    this.command.commentary='';
    this.command.selectedProduct='';
  }

  // ELIMINAR PRODUCTO DEL PEDIDO
  delete(product, i){
    this.selectedProduct.splice(i, 1)
  }

}
