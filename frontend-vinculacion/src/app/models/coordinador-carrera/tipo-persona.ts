import { Catalogo } from "./catalogo";
import { Persona } from "./persona";

export interface TipoPersona {
  id:number,
  semestre:string,
  carrera:string,
  jornada:string,
  catalogo_id: Catalogo[],
  persona_id: Persona[]
}
