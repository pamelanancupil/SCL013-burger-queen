import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../connection.service';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {

  commands:any

  constructor(private connection: ConnectionService ) {
    this.connection.commandChef().subscribe(command=>{
    this.commands=command;
    console.log(this.commands)
    })
  }

  ngOnInit(): void {
  }

}
