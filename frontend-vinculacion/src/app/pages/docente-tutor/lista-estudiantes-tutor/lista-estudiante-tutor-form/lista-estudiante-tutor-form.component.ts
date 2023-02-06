import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoPersona } from 'src/app/models/coordinador-carrera/tipo-persona';
import { PersonaHttpServiceService } from 'src/app/service/coordinador-carrera/persona/persona-http-service.service';
import { TipoPersonaHttpServiceService } from 'src/app/service/coordinador-carrera/tipo_persona/tipo-persona-http-service.service';

@Component({
  selector: 'app-lista-estudiante-tutor-form',
  templateUrl: './lista-estudiante-tutor-form.component.html',
  styleUrls: ['./lista-estudiante-tutor-form.component.css']
})
export class ListaEstudianteTutorFormComponent implements OnInit{

  constructor(
    private personaHttpService: PersonaHttpServiceService,
    private tipoPersonaHttpService: TipoPersonaHttpServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ){}

  currentEntity: TipoPersona =
  {
    id: 0,
    semestre: "",
    carrera:"",
    jornada:"",
    catalogo_id: [],
    persona_id: []
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (params.get("id")){
          this.findById(parseInt(params.get("id")!));
        }
      }
    )
  }

  save():void {
    console.table(this.currentEntity);
    this.tipoPersonaHttpService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          id: 0,
          semestre: "",
          carrera:"",
          jornada:"",
          catalogo_id: [],
          persona_id: []
        };
        //this.router.navigate(['/layout/actividad-list'])
      }
    )
  }

  findById(id: number):void {
    this.tipoPersonaHttpService.findById(id).subscribe(
      (response) =>{
        this.currentEntity = response;
        this.currentEntity.persona_id.forEach(
          (auth) => {
            this.personaHttpService.findById(auth.id).subscribe(
              (item) => auth.nombre = item.nombre
            )
          }
        )
      }
    )
  }

  deleteById():void{
    this.tipoPersonaHttpService.deleteById(this.currentEntity.id).subscribe(
      () => {
        console.log("Borrado");
        //redireccionar ....
      }
    )
  }

  removeAuthority(id: number):void {
    this.currentEntity.persona_id =
    this.currentEntity.persona_id.filter(
      (item) => item.id != id
    );
  }
}
