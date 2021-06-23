import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/usuario.interface';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string = environment.url;

  constructor(private http:HttpClient) { }

  crearUsuario(usuario:Usuario){
    return this.http.post(`${this.url}/usuario`,usuario)
  }
}
