import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../../services/todo.service'
import Swal from 'sweetalert2'
import { Todo } from 'src/app/interfaces/todo.interface';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  todos:Todo[]=[]

  @ViewChild("InputTarea") tarea!:ElementRef;

  constructor( private todoService:TodoService) { }

  ngOnInit(): void {

    let userId = localStorage.getItem("userId") ? localStorage.getItem("userId") || "":"";
    /*Logica para quitar las pinches comillas del LocalStorage*/
    userId = userId.slice(1,userId.length-1)

    this.todoService.obtenerTodos(userId).subscribe(todo =>{
      console.log(todo);
      this.todos = todo.todo;
    })

  }

  crearTodo(){
    console.log(this.tarea.nativeElement.value);
    if(this.tarea.nativeElement.value == ""){
      return;
    }
    let userId = localStorage.getItem("userId") ? localStorage.getItem("userId") || "":"";
    /*Logica para quitar las pinches comillas del LocalStorage*/
    userId = userId.slice(1,userId.length-1)
    this.todoService.crearTodo({name:this.tarea.nativeElement.value, userId}).subscribe((res:any) => {console.log(res);
    this.tarea.nativeElement.value = "";


      Swal.fire({
        icon: 'success',
        title: res.message,
        showConfirmButton: false,
        timer: 1500
      })

    })

    
    
  }


}
