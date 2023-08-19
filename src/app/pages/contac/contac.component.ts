
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CosturaAng } from 'src/app/models/CosturaAng';
import { OrderCosturaService } from 'src/app/services/order-costura.service';

@Component({
  selector: 'app-contac',
  templateUrl: './contac.component.html',
  styleUrls: ['./contac.component.css']
})

export class ContacComponent implements OnInit{

 createTaller: FormGroup;
 submitted = false;
  

  constructor (private fb: FormBuilder,
               private _usuarioService: OrderCosturaService,
               private router: Router){

   this.createTaller = this.fb.group({
      
     nombre: ['', Validators.required],
     apellido: ['', Validators.required],
     mobil: ['', Validators.required]

   })

  } 
  
  ngOnInit(): void {}

  agregarUsuario() {
    this.submitted = true;

    if(this.createTaller.invalid) {
      return
    }
        
    //objeto enviado a firebase
     const usuario: any = {
      nombre: this.createTaller.value.nombre,
      apellido: this.createTaller.value.apellido,
      mobil: this.createTaller.value.mobil,
      fechaCreacion: new Date(),
      fechaActualizacin: new Date(),
     }

    this._usuarioService.agregarUsuario(usuario).then(() =>{
      console.log('Usuario registrado con exito!');
      this.router.navigate(['/listar'])
      
    }).catch(error =>{
      console.log(error);
      
    })
    
    
  }
     
}
