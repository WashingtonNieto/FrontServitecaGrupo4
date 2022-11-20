import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from '../modelos/carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  url: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  obtenerCarros(): Observable<Carro[]> {
    return this.http.get<Carro[]>(`${this.url}/carros`);
  }

  crearCarro(carro: Carro): Observable<Carro> {
    return this.http.post<Carro>(`${this.url}/carros`, carro);
  }

  buscarCarro(id: String): Observable<Carro> {
    return this.http.get<Carro>(`${this.url}/carros/${id}`);
  }

  actualizarCarro(carro: Carro): Observable<Carro> {
    return this.http.put<Carro>(`${this.url}/carros/${carro.id}`, carro);
  }

  eliminarCarro(id: String): Observable<any> {
    return this.http.delete(`${this.url}/carros/${id}`);
  }
}
