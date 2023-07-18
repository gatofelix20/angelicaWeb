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

     usuario: ['', Validators.required],
     email: ['', [Validators.required, Validators.minLength(12),Validators.maxLength(25)]],
     mobil: ['', [Validators.required, Validators.minLength(11),Validators.maxLength(14)]]

    })

  }

  ngOnInit(): void {}

  contac() {
    console.log(this.form);
  }

}
