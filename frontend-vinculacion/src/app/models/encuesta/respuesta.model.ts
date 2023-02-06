import { PreguntaModel } from "./pregunta.model";


export interface RespuestaModel{
    id:number;
    name:string;

}

export interface CreateRespuestaDto extends Omit<RespuestaModel, 'id' | 'pregunta'> {
  preguntaId:number;
  }

  export interface UpdateRespuestaDto extends Partial<RespuestaModel>{
  preguntaId?:number;
  }
