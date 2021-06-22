import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form!:FormGroup;

  constructor(private formbuilder:FormBuilder,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group(
      {
        nombre:["Keso", Validators.required],
        apellido_p:["Villanueva", Validators.required],
        apellido_m:["Colon", Validators.required],
        email:["yehet@ohorat.com", Validators.required],
        password:["kosomana", Validators.required],
      }
    )
  }

  enviarUsuario(){
    if (this.form.invalid){
      return
    }
    this.authService.crearUsuario(this.form.value).subscribe(user => {
      console.log(user);
    })
  }

}
