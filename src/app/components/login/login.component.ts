import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(private formbuilder:FormBuilder,
              private authService:AuthService,
              private router:Router) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group(
      {
        email:["", Validators.required],
        password:["", Validators.required]
      }
    )
  }

  login(){
    if (this.form.invalid){
      return 
    }
    this.authService.login(this.form.value).subscribe((user)=>{
      console.log(user);
      localStorage.setItem("token", JSON.stringify(user.token))
      localStorage.setItem("userId", JSON.stringify(user.usuario._id))

      this.form.reset();

      Swal.fire({
        icon: 'success',
        title: user.message,
        showConfirmButton: false,
        timer: 1500
      })

      setTimeout(()=>  {
        this.router.navigateByUrl("/")
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
