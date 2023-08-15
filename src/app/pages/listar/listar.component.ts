import { Component, OnInit } from '@angular/core';
import { CosturaAng } from 'src/app/models/CosturaAng';
import { OrderCosturaService } from 'src/app/services/order-costura.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  

  constructor(private _costuraservice: OrderCosturaService ) {}

  ngOnInit(): void {

    

  }

 

 
  

}
