import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPersonaComponent } from './buscar-persona/buscar-persona.component';
import { CrearPersonaComponent } from './crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './eliminar-persona/eliminar-persona.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'crear-persona', component: CrearPersonaComponent },
  { path: 'editar-persona', component: EditarPersonaComponent },
  { path: 'eliminar-persona', component: EliminarPersonaComponent },
  { path: 'buscar-persona', component: BuscarPersonaComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonasRoutingModule { }
