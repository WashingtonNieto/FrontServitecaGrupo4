import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Carro } from 'src/app/modelos/carro';
import { CarroService } from 'src/app/servicios/carro.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id: String = "";

  fgValidator: FormGroup = this.fb.group({
    id: ['', [Validators.required]],
    placa: ['', [Validators.required]],
    color: ['', [Validators.required]],
    marca: ['', [Validators.required]],
    modelo: ['', [Validators.required]],
    anio: ['', [Validators.required]],
    imagen: ['', [Validators.required]],
  });


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private carroServicio: CarroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.cargarCarro();
  }

  cargarCarro() {
    this.carroServicio.buscarCarro(this.id)
      .subscribe(carro => {
        this.fgValidator.controls["id"].setValue(carro.id);
        this.fgValidator.controls["placa"].setValue(carro.placa);
        this.fgValidator.controls["color"].setValue(carro.color);
        this.fgValidator.controls["marca"].setValue(carro.marca);
        this.fgValidator.controls["modelo"].setValue(carro.modelo);
        this.fgValidator.controls["anio"].setValue(carro.anio);
        this.fgValidator.controls["imagen"].setValue(carro.imagen);
      });
  }

  actualizarCarro() {
    let carro = new Carro();
    carro.id = this.fgValidator.controls["id"].value;
    carro.placa = this.fgValidator.controls["placa"].value;
    carro.color = this.fgValidator.controls["color"].value;
    carro.marca = this.fgValidator.controls["marca"].value;
    carro.modelo = this.fgValidator.controls["modelo"].value;
    carro.anio = this.fgValidator.controls["anio"].value;
    carro.imagen = this.fgValidator.controls["imagen"].value;
    this.carroServicio.actualizarCarro(carro).subscribe({
      next: (carro) => {
        alert("Carro actualizado");
        this.router.navigate(["/carros"]);
      },
      error: (error) => { alert("error actualizando el carro"); }
    })
  }

}
