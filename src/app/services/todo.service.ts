import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../interfaces/todo.interface';
import { TodoResponse } from '../interfaces/TodoResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url:string = environment.url;


  constructor(private http:HttpClient) { 


  }

  crearTodo(todo:Todo){

    let token = this.verificarStorage();
    token = token.slice(1,token.length-1)
    return this.http.post(`${this.url}/todo`, todo, {headers:{"Authorization":`Bearer ${token}`}} );
  }

  verificarStorage(){
    const token=localStorage.getItem("token")||""
    if(token===""){
      return ""
  }else{
    return token;
  }
}

obtenerTodos(id:string){

  let token = this.verificarStorage();
  token = token.slice(1,token.length-1)
  return this.http.get<TodoResponse>(`${this.url}/todo/${id}`, {headers:{"Authorization":`Bearer ${token}`}} );
}


}
