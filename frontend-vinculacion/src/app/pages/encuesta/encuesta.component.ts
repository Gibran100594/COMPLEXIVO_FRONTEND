import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreguntaModel } from 'src/app/models/encuesta/pregunta.model';
import { RespuestaModel } from 'src/app/models/encuesta/respuesta.model';
import { EncuestaHttpService } from 'src/app/service/encuesta/encuesta-http.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit{



  constructor(private preguntaHttpService:EncuestaHttpService,
    private  router: Router,
    private activatedRoute: ActivatedRoute,

    ) {

   }

   preguntas: PreguntaModel[] = [];
   selectedPregunta:PreguntaModel = {
     id: 0,
     name: ''
   };

   currentEntity: PreguntaModel = {
    id: 0,
    name: '',

  };

   ngOnInit(): void {

    this.getpreguntas();

    this.activatedRoute.paramMap.subscribe((parametros) => {
      if (parametros.get('id')) {
        this.findById(parseInt(parametros.get('id')!));
      }
    });





  }



  public getpreguntas() :void{
    this.preguntaHttpService.getAll().subscribe(
      (response) => {
        this.preguntas = response;
        console.log(response);
      });
  }


   createPregunta() :void{
    this.preguntaHttpService.create(this.currentEntity).subscribe(()=>
    {
      this.currentEntity={
        id: 0,
        name: '',
      };
      this.router.navigate(['/encuesta']);

    })
   }





  findById(id: number):void{
    this.preguntaHttpService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
)
  }



  deleteById():void {

    this.preguntaHttpService.deleteById(this.currentEntity.id).subscribe(
     () => {
      this.currentEntity={
        id: 0,
        name: '',
      };
    })
  }


}
