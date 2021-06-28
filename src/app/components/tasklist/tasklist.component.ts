import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service'
import { Todo } from 'src/app/interfaces/todo.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  terminado:boolean=true

  @Input() todos:Todo[]=[]

  constructor(private todoService:TodoService,
              private router: Router) { }

  ngOnInit(): void {

    let userId = localStorage.getItem("userId") ? localStorage.getItem("userId") || "":"";
    /*Logica para quitar las pinches comillas del LocalStorage*/
    userId = userId.slice(1,userId.length-1)

    this.todoService.obtenerTodos(userId).subscribe(todo =>{
      console.log(todo);
      this.todos = todo.todo;
    },
    (error) =>{
     console.log(error);
     
     Swal.fire({
       icon: 'error',
       title: 'Oops...',
       text: error.error.message
     })
     this.router.navigateByUrl("/login")
   })

  }

  progressTodo(Id:string|undefined, todo:Todo){
    this.todoService.progresoTodo(Id).subscribe( (res)=>{
      console.log(res);
      todo.status="Progreso"
    },
    (error) =>{
     console.log(error);
     
     Swal.fire({
       icon: 'error',
       title: 'Oops...',
       text: error.error.message
     })
     this.router.navigateByUrl("/login")
   })
  }

  sucessTodo(Id:string|undefined, todo:Todo){
    this.todoService.sucessTodo(Id).subscribe( (res)=>{
      console.log(res);
      todo.status="Completado"
    },
    (error) =>{
     console.log(error);
     
     Swal.fire({
       icon: 'error',
       title: 'Oops...',
       text: error.error.message
     })
     this.router.navigateByUrl("/login")
   })
  }

  deleteTodo(Id:string|undefined){
    this.todoService.deleteTodo(Id).subscribe( (res)=>{
      console.log(res);
      this.todos=this.todos.filter((todo)=>todo._id!==Id)
    },
     (error) =>{
      console.log(error);
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.error.message
      })
      this.router.navigateByUrl("/login")
    })
  }



  
}
