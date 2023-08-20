import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CosturaAng } from 'src/app/models/CosturaAng';
import { OrderCosturaService } from 'src/app/services/order-costura.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  usuarios: any[] = [];

  constructor(private  _usuarioService: OrderCosturaService) {
   
  }

  ngOnInit(): void {
      this.getUsuarios();
  }

 getUsuarios() {
 this._usuarioService.getUsuarios().subscribe(data => {
  this.usuarios = [];
  data.forEach((element: any) => {
      
    //Objeto

    this.usuarios.push({
       id: element.payload.doc.id,
       ...element.payload.doc.data()
    })
    
  });
  console.log(this.usuarios);
  
 })
  
 }

}
