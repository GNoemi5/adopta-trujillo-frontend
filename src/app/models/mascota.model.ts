import { TipoMascota } from "./tipo-mascota.model";

export class Mascota {
    id?: any;
  nombre?: string;
  raza?: string;
  fechaNacimiento?: string;
  tamaño?:string;
  peso?:number;
  tipoMascota?:TipoMascota;
  salud?: string;
  estado?: boolean;
  foto?:string;
  descripcion?:string;
}
