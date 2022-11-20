import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {path:"inicio",  component:InicioComponent},
  {path:"",  pathMatch: 'full',  redirectTo: '/inicio'},
  {path: 'seguridad',loadChildren:() => import('./modulos/seguridad/seguridad.module').then(x => x.SeguridadModule) },
  {path: 'carros', loadChildren:() => import('./modulos/carros/carros.module').then(x =>  x.CarrosModule) },
  {path: 'clientes',loadChildren:() => import('./modulos/clientes/clientes.module').then(x =>  x.ClientesModule) },
  {path: 'servicios',loadChildren:() => import('./modulos/servicios/servicios.module').then(x =>  x.ServiciosModule) },
  {path: 'ventas',loadChildren:() => import('./modulos/ventas/ventas.module').then(x =>  x.VentasModule) },
  {path: 'personas',loadChildren:() => import('./modulos/personas/personas.module').then(x => x.PersonasModule)},
  {path:'**',component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
