
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  usuario = 'Agregar Costura';
  id: string | null;

  constructor(private fb: FormBuilder, private _costuraService: OrderCosturaService,
    private aRoute: ActivatedRoute) {

    //Crear objeto

    this.form = this.fb.group({

     usuario: ['', Validators.required],
     email: ['', [Validators.required, Validators.minLength(12),Validators.maxLength(25)]],
     mobil: ['', [Validators.required, Validators.minLength(11),Validators.maxLength(14)]]

    })

    this.id = this.aRoute.snapshot.paramMap.get('id');
       console.log(this.id);
       
  }

  ngOnInit(): void {
      
  }

      //confirmacion de ngSubmit y Objeto
 
   

}
