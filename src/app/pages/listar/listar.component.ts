import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private  _usuarioService: OrderCosturaService,
              private toastr: ToastrService) {
   
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

    //Eliminar

 eliminarUsuario(id: string){

  this._usuarioService.eliminarUsuario(id).then(() => {
      console.log('Empleado eliminado con exito');
      this.toastr.error('El usuario fue eliminado con exito!', 'Registro eliminado', {positionClass: 'toast-bottom-right'});
      
  }).catch(error =>{
    console.log(error);
    
  });
  

 }
}
