import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RegistroComponent } from './components/registro/registro.component';
import { SageGuard } from './guards/sage.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent}, 
  {path:'registro',component:RegistroComponent},
  {path:'',canActivate:[SageGuard],component:PrincipalComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
