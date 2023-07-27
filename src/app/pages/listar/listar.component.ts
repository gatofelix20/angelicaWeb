import { Component, OnInit } from '@angular/core';
import { CosturaAng } from 'src/app/models/CosturaAng';
import { OrderCosturaService } from 'src/app/services/order-costura.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  listarCostura: CosturaAng[] = [];

  constructor(private _costuraservice: OrderCosturaService ) {}

  ngOnInit(): void {

      this.obtenerCostura();

  }

  obtenerCostura() {

     this._costuraservice.obtenerCosturas().subscribe(doc => {

       this.listarCostura = [];

       doc.forEach((element: any )=> {
        
        this.listarCostura.push({

         id: element.payload.doc.id,
         ...element.payload.doc.data()

        });
        
       });

       console.log(this.listarCostura);
       
       })
  }

  eliminarCostura(id: any) {

    this._costuraservice.eliminarCostura(id).then(() =>{

    },error => {
      console.log(error);
      
    }
    )

  }

}
