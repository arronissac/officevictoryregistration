import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { StatusComponent } from './status/status.component';
import { Register2Component } from './register2/register2.component';
import { Register3Component } from './register3/register3.component';


const routes: Routes = [

  { path: 'register', component:RegisterComponent },
  { path: 'register2', component:Register2Component },
  { path: 'register3', component:Register3Component },
  {path: '', redirectTo: 'register', pathMatch: 'full'},
  { path: 'status', component:StatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
