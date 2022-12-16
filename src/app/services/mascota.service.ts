import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mascota } from '../models/mascota.model';
const baseUrl = 'http://localhost:9080/mascota/v1/listar';
@Injectable({
  providedIn: 'root'
})
export class MascotaService {


constructor(private http: HttpClient) { }

getAll(): Observable<Mascota[]> {
  return this.http.get<Mascota[]>(baseUrl);
}
}
