import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contac',
  templateUrl: './contac.component.html',
  styleUrls: ['./contac.component.css']
})
export class ContacComponent implements OnInit{

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

     nombre: ['', Validators.required],
     apellido: ['', Validators.required],
     email: ['', Validators.required],
     mobil: ['', Validators.required]

    })

  }

  ngOnInit(): void {}

  contac() {
    console.log(this.form);
  }

}
