import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarcompComponent } from './navbarcomp/navbarcomp.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
const routes: Routes = [{path:'',component:NavbarcompComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,FontAwesomeModule]
})
export class AppRoutingModule { }
