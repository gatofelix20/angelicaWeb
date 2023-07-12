import { Component, OnInit } from '@angular/core';
import { OrderCosturaService } from 'src/app/services/order-costura.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  constructor(private service: OrderCosturaService) {}

  foodData: any;

  ngOnInit(): void {

   this.foodData = this.service.foodDetails;

  }

}
