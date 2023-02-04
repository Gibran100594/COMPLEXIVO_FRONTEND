import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PreguntaModel } from 'src/app/models/encuesta/pregunta.model';
import { CreateRespuestaDto, RespuestaModel, UpdateRespuestaDto } from 'src/app/models/encuesta/respuesta.model';

@Injectable({
  providedIn: 'root'
})
export class EncuestaHttpService {

  constructor(private httpClient: HttpClient) {

   }

   private httpOptions={
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }


   private url: string = "http://localhost:8080/api/pregunta";

   getAll():Observable<PreguntaModel[]> {

    return this.httpClient.get<PreguntaModel[]>(this.url+"/findAll", this.httpOptions);
  }

  // create(product: CreateRespuestaDto):Observable<RespuestaModel> {
  //   const url = `${this.API_URL}`;
  //   return this.httpClient.post<RespuestaModel>(url, product);
  // }
  // update(id:RespuestaModel['id'], product: UpdateRespuestaDto):Observable<RespuestaModel> {
  //   const url = `${this.API_URL}/${id}`;
  //   return this.httpClient.put<RespuestaModel>(url, product);
  // }
  // destroy(id:RespuestaModel['id']):Observable<any> {
  //   const url = `${this.API_URL}/${id}`;
  //   return this.httpClient.delete<any>(url).
  //   pipe(map((response:{rta:boolean})=>{return response.rta;})
  //   );
  // }


}
