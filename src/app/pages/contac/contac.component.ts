import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CosturaAng } from 'src/app/models/CosturaAng';
import { OrderCosturaService } from 'src/app/services/order-costura.service';

@Component({
  selector: 'app-contac',
  templateUrl: './contac.component.html',
  styleUrls: ['./contac.component.css']
})
export class ContacComponent implements OnInit{

  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _costuraService: OrderCosturaService) {

    //Crear objeto

    this.form = this.fb.group({

     usuario: ['', Validators.required],
     email: ['', [Validators.required, Validators.minLength(12),Validators.maxLength(25)]],
     mobil: ['', [Validators.required, Validators.minLength(11),Validators.maxLength(14)]]

    })

  }

  ngOnInit(): void {}

      //confirmacion de ngSubmit y Objeto
 
    costuraMar() {
     
      const COSTURA : CosturaAng = {

       usuario: this.form.value.usuario,
       email: this.form.value.email,
       mobil: this.form.value.mobil,
      }
      
      this.loading = true;
      this._costuraService.guardarCostura(COSTURA).then(() =>{

        this.loading = false;

        console.log('Registro Registrado');
        this.form.reset();
        
      }, error =>{
        this.loading = false;
        console.log(error);
        
      })
      
    }

}
