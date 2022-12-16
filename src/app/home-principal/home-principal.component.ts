import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/models/mascota.model';
import { MascotaService } from '../services/mascota.service';
@Component({
  selector: 'app-home-principal',
  templateUrl: './home-principal.component.html',
  styleUrls: ['./home-principal.component.css'],
})
export class HomePrincipalComponent implements OnInit {
  mascotas?: Mascota[];
  constructor(private mascotaService: MascotaService) {}
  ngOnInit(): void {
    this.obtenerMascotas();
  }

  obtenerMascotas():void{
    this.mascotaService.getAll()
    .subscribe({
      next:(data)=>{
        this.mascotas=data;
        console.log(data);
      },
      error:(e)=>console.error(e)
    })
  }
}
