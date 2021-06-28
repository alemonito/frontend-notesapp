import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { TodoService } from '../../services/todo.service'
import Swal from 'sweetalert2'
import { Todo } from 'src/app/interfaces/todo.interface';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  /*@Output()todo:EventEmitter<Todo>= new EventEmitter()*/

  todos:Todo[]=[]

  @ViewChild("InputTarea") tarea!:ElementRef;

  constructor( private todoService:TodoService,
               private router: Router,
               private authService:AuthService) { }

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
      console.log(res.todo._id);
    this.tarea.nativeElement.value = "";
    this.todos.push(res.todo)
    
    this.todoService.obtenerTodos(userId).subscribe(todo =>{
      console.log(todo);
      this.todos = todo.todo;
    })

      Swal.fire({
        icon: 'success',
        title: res.message,
        showConfirmButton: false,
        timer: 1500
      })

    }, (error) =>{
      console.log(error);
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.error.message
      })
      this.router.navigateByUrl("/login")
    }
    )
    
    
  }

  logOut(){
    this.authService.logOut()
  }

}
