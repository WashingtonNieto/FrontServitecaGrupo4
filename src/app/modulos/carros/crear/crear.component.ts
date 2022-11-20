import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Carro } from 'src/app/modelos/carro';
import { CarroService } from 'src/app/servicios/carro.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  fgValidator: FormGroup = this.fb.group({
    placa: ['', [Validators.required]],
    color: ['', [Validators.required]],
    marca: ['', [Validators.required]],
    modelo: ['', [Validators.required]],
    anio: ['', [Validators.required]],
    imagen: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private carroServicio: CarroService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  crearCarro() {
    let carro = new Carro();
    carro.placa = this.fgValidator.controls["placa"].value;
    carro.color = this.fgValidator.controls["color"].value;
    carro.marca = this.fgValidator.controls["marca"].value;
    carro.modelo = this.fgValidator.controls["modelo"].value;
    carro.anio = this.fgValidator.controls["anio"].value;
    carro.imagen = this.fgValidator.controls["imagen"].value;

    this.carroServicio.crearCarro(carro).subscribe({
      next: (carro) => {
        alert("Carro almacenado");
        this.router.navigate(["/carros"]);
      },
      error: (error) => { alert("error almacenando el carro"); }
    })

  }

}
