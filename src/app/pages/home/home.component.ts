import { Component, OnInit } from '@angular/core';
import{ OrderCosturaService} from 'src/app/services/order-costura.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

 constructor(private service: OrderCosturaService ) {}

 foodData: any;

 ngOnInit(): void {
     this.foodData = this.service.foodDetails;
 }

}


