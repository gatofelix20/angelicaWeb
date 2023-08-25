import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContacComponent } from './pages/contac/contac.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { ListarComponent } from './pages/listar/listar.component';


const routes: Routes = [

  {
    path:'',
    component: HomeComponent
  },

  {
    path: 'menu',
    component: MenuComponent
  },

  {
   path: 'menu/:id',
   component: MenupageComponent

  },

      //Crud

  {
    path: 'contact',
    component: ContacComponent
  },

  {
    path: 'listar',
    component: ListarComponent
  },

  {
    path:'',
    redirectTo: 'listar',
    pathMatch: 'full'
  },

  {
    path: 'editUsuario/:id',
    component: ContacComponent
  },

  {
    path:'**',
    redirectTo: 'listar',
    pathMatch: 'full'
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
