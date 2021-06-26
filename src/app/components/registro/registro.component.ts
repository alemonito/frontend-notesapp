import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form!:FormGroup;

  constructor(private formbuilder:FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group(
      {
        nombre:["Kesito", Validators.required],
        apellido_p:["Villa", Validators.required],
        apellido_m:["Nueva", Validators.required],
        email:["kesi@to.com", Validators.required],
        password:["123456", Validators.required],
      }
    )
  }

  enviarUsuario(){
    if (this.form.invalid){
      return
    }
    this.authService.crearUsuario(this.form.value).subscribe((user:any) => {
      console.log(user);

      this.form.reset();

      Swal.fire({
        icon: 'success',
        title: user.message,
        showConfirmButton: false,
        timer: 1500
      })

      setTimeout(()=>  {
        this.router.navigateByUrl("/login")
      }, 1500)

    }, (error) =>{
      console.log(error);
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.error.message
      })
    })
  }

}
