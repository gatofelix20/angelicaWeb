
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CosturaAng } from 'src/app/models/CosturaAng';
import { OrderCosturaService } from 'src/app/services/order-costura.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contac',
  templateUrl: './contac.component.html',
  styleUrls: ['./contac.component.css']
})

export class ContacComponent implements OnInit{

 createTaller: FormGroup;
 submitted = false;
 loading = false;
 id: string | null;
 titulo = 'Agregar Usuario';
  

  constructor (private fb: FormBuilder,
               private _usuarioService: OrderCosturaService,
               private router: Router,
               private toastr: ToastrService,
               private aRoute: ActivatedRoute){

   this.createTaller = this.fb.group({
      
     nombre: ['', Validators.required],
     apellido: ['', Validators.required],
     mobil: ['', Validators.required]
   })

   //Acceder al id
   this.id = this.aRoute.snapshot.paramMap.get('id');
   console.log(this.id);
  } 
  
  ngOnInit(): void {
    this.esEditar();
  }

     //Editar

  agregarEditarUsuario() {
    this.submitted = true;

    if(this.createTaller.invalid) {
      return
    }

    if(this.id === null) {
       this.agregarUsuario();
    }else{
      this.editarUsuario(this.id);
    }
    
  }

  agregarUsuario() {
//objeto enviado a firebase
    const usuario: any = {
      nombre: this.createTaller.value.nombre,
      apellido: this.createTaller.value.apellido,
      mobil: this.createTaller.value.mobil,
      fechaCreacion: new Date(),
      fechaActualizacin: new Date(),
     }

     this.loading = true;

    this._usuarioService.agregarUsuario(usuario).then(() =>{
      this.toastr.success('El usuario fue registrado con exito!', 'Usuario registrado'); 
      
      this.loading = false;

      this.router.navigate(['/listar'])

    }).catch(error =>{
      console.log(error);

     this.loading = false;
    })
  }

  editarUsuario(id: string) {

     const usuario: any = {
      nombre: this.createTaller.value.nombre,
      apellido: this.createTaller.value.apellido,
      mobil: this.createTaller.value.mobil,
      fechaActualizacin: new Date(),
     }
     this.loading = true;

     this._usuarioService.actualizarUsuario(id, usuario).then(() =>{
      this.loading = false;
      this.toastr.info('El Usuario fue modificado con exito!', 'Usuario Modificado', {
        positionClass: 'toast-bootom-right' 
      })

      this.router.navigate(['/listar']);

     });
  }

   // metodo Editar
   esEditar() {
    this.titulo = 'Editar Usuario'
    if(this.id !== null){
      this.loading = true;
      this._usuarioService.getUsuario(this.id).subscribe(data =>{
        this.loading = false;
        console.log(data.payload.data()['nombre']);

        this.createTaller.setValue({

          //Rellenar campos
          nombre: data.payload.data()['nombre'],
          apellido: data.payload.data()['apellido'],
          mobil: data.payload.data()['mobil'],

        })
        
      })
    }
   }

     
}
