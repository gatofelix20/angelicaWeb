import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CosturaAng } from 'src/app/models/CosturaAng';

@Component({
  selector: 'app-contac',
  templateUrl: './contac.component.html',
  styleUrls: ['./contac.component.css']
})
export class ContacComponent implements OnInit{

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

     usuario: ['', Validators.required],
     email: ['', [Validators.required, Validators.minLength(12),Validators.maxLength(25)]],
     mobil: ['', [Validators.required, Validators.minLength(11),Validators.maxLength(14)]]

    })

  }

  ngOnInit(): void {}

  contac() {
    
    //Crear Objeto

   const COSTURA : CosturaAng = {
     
      usuario: this.form.value.usuario,
      email: this.form.value.email,
      mobil: this.form.value.mobil,
   }
   console.log(COSTURA);
   

  }

}
