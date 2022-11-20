import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrosRoutingModule } from './carros-routing.module';
import { IndexComponent } from './index/index.component';
import { CrearComponent } from './crear/crear.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './editar/editar.component';


@NgModule({
  declarations: [
    IndexComponent,
    CrearComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    CarrosRoutingModule,
    FormsModule,
    ReactiveFormsModule    
  ]
})
export class CarrosModule { }
