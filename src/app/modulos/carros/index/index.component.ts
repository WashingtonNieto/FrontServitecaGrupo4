import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/modelos/carro';
import { CarroService } from 'src/app/servicios/carro.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  carros: Carro[] = [];

  constructor(private carroServicio: CarroService) { }

  ngOnInit(): void {
    this.cargarCarros();
  }

  cargarCarros() {
    this.carroServicio.obtenerCarros()
      .subscribe(carros => this.carros = carros);
  }

  eliminarCarro(id: any) {
    if (confirm("Desea eliminar este carro?")) {
      this.carroServicio.eliminarCarro(id).subscribe({
        next: (any) => {
          alert("Carro eliminado");
          this.cargarCarros();
        },
        error: (error) => { alert("error eliminando el carro"); }
      })
    }
  }

}
