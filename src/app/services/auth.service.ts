import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/usuario.interface';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoginResponse } from 'src/app/interfaces/loginResponse.interface';

interface EmailPass{
  email:string;
  password:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string = environment.url;

  constructor(private http:HttpClient) { }

  crearUsuario(usuario:Usuario){
    return this.http.post(`${this.url}/usuario`,usuario)
  }

  login(user:EmailPass){
    return this.http.post<LoginResponse>(`${this.url}/login`,user)
  }

  verificarStorage(){
    const token=JSON.parse(localStorage.getItem("token")||"")
    if(token===""){
      return false;
    }else{
      return true;
    }
  }
}
