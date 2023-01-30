import { CommonModule } from '@angular/common';
import {HttpClientModule } from '@angular/common/http';
import { PortafolioVinculacionComponent } from './docente-vinculacion/portafolio-vinculacion/portafolio-vinculacion.component';
import { EstudianteComponent } from './estudiante/estudiante/estudiante.component';
import { EstudiantePortafolioComponent } from './estudiante/estudiante-portafolio/estudiante-portafolio.component';
import { PortafolioComponent } from './coordinador-general/portafolio/portafolio.component';
import { SolicitudCertificadoComponent } from './coordinador-general/solicitud-certificado/solicitud-certificado.component';
import { SharedModule } from '../shared/shared.module';
import { AvanceCumplimientoComponent } from './informe-control/avance-cumplimiento/avance-cumplimiento.component';
import { ObservacionAvanceComponent } from './informe-control/observacion-avance/observacion-avance.component';
import { InformeControlComponent } from './informe-control/informe-control/informe-control.component';
import { InformeInicialComponent } from './informe-inicial/informe-inicial/informe-inicial.component';
import { PrimerFormularioInicialComponent } from './informe-inicial/primer-formulario-inicial/primer-formulario-inicial.component';
import { SegundoFormularioInicialComponent } from './informe-inicial/segundo-formulario-inicial/segundo-formulario-inicial.component';
import { FormularioFinalTutorComponent } from './docente-tutor/formulario-final-tutor/formulario-final-tutor.component';
import { InformeFinalEstudianteComponent } from './estudiante/informe-final-estudiante/informe-final-estudiante.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { ActividadesComponent } from './pestanias/actividades/actividades.component';
import { AnexosComponent } from './pestanias/anexos/anexos.component';
import { BibliografiaComponent } from './pestanias/bibliografia/bibliografia.component';
import { CertificadosComponent } from './pestanias/certificados/certificados.component';
import { DatosGeneralesComponent } from './pestanias/datos-generales/datos-generales.component';
import { DocumentosComponent } from './pestanias/documentos/documentos.component';
import { EmpresaComponent } from './pestanias/empresa/empresa.component';
import { FirmasComponent } from './pestanias/firmas/firmas.component';
import { IntegrantesComponent } from './pestanias/integrantes/integrantes.component';
import { ObservacionesComponent } from './pestanias/observaciones/observaciones.component';
import { PlanDeTrabajoComponent } from './pestanias/plan-de-trabajo/plan-de-trabajo.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SolicitudFormComponent } from './docente-vinculacion/solicitud-vinculacion/solicitud-form/solicitud-form.component';
import { SolicitudSearchComponent } from './docente-vinculacion/solicitud-vinculacion/solicitud-search/solicitud-search.component';
import { ProyectoFormComponent } from './docente-vinculacion/proyecto-vinculacion/proyecto-form/proyecto-form.component';
import { AsignarFundacionFormComponent } from './docente-vinculacion/asignar-fundacion-vinculacion/asignar-fundacion-form/asignar-fundacion-form.component';
import { ConfiguracionVinculacionFormComponent } from './docente-vinculacion/configuracion-vinculacion/configuracion-vinculacion-form/configuracion-vinculacion-form.component';
import { ProyectoSearchComponent } from './docente-vinculacion/proyecto-vinculacion/proyecto-search/proyecto-search.component';
import { AsignarFundacionSearchComponent } from './docente-vinculacion/asignar-fundacion-vinculacion/asignar-fundacion-search/asignar-fundacion-search.component';
import { ConfiguracionVinculacionSearchComponent } from './docente-vinculacion/configuracion-vinculacion/configuracion-vinculacion-search/configuracion-vinculacion-search.component';

import { PortafolioTutorFormularioComponent } from './docente-tutor/portafolio-tutor/portafolio-tutor-formulario/portafolio-tutor-formulario.component';
import { PortafolioTutorEstudianteComponent } from './docente-tutor/portafolio-tutor/portafolio-tutor-estudiante/portafolio-tutor-estudiante.component';
import { PortafolioTutorTutorComponent } from './docente-tutor/portafolio-tutor/portafolio-tutor-tutor/portafolio-tutor-tutor.component';

import { ListaFundacionTutorFromComponent } from './docente-tutor/lista-fundacion-tutor/lista-fundacion-tutor-from/lista-fundacion-tutor-from.component';
import { ListaFundacionTutorBuscarComponent } from './docente-tutor/lista-fundacion-tutor/lista-fundacion-tutor-buscar/lista-fundacion-tutor-buscar.component';

import { ListaEstudianteTutorFormComponent } from './docente-tutor/lista-estudiantes-tutor/lista-estudiante-tutor-form/lista-estudiante-tutor-form.component';
import { ListaEstudianteTutorBuscarComponent } from './docente-tutor/lista-estudiantes-tutor/lista-estudiante-tutor-buscar/lista-estudiante-tutor-buscar.component';
import { RedireccionarPrincipalComponent } from './coordinador-carrera/redireccionar/redireccionar-principal/redireccionar-principal.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgregarRolAddComponent } from './coordinador-carrera/agregar-rol/agregar-rol-add/agregar-rol-add.component';
import { AgregarRolSearchComponent } from './coordinador-carrera/agregar-rol/agregar-rol-search/agregar-rol-search.component';
import { RellenarDatosFormComponent } from './coordinador-carrera/rellenar-datos/rellenar-datos-form/rellenar-datos-form.component';
import { ListaEstudiantesSearchComponent } from './coordinador-carrera/lista-estudiantes/lista-estudiantes-search/lista-estudiantes-search.component';
import { ListaEstudiantesFormComponent } from './coordinador-carrera/lista-estudiantes/lista-estudiantes-form/lista-estudiantes-form.component';
import { ListaPortafoliosFormComponent } from './coordinador-carrera/lista-portafolios/lista-portafolios-form/lista-portafolios-form.component';
import { ListaPortafoliosEstudiantesComponent } from './coordinador-carrera/lista-portafolios/lista-portafolios-estudiantes/lista-portafolios-estudiantes.component';
import { ListaPortafoliosTutorComponent } from './coordinador-carrera/lista-portafolios/lista-portafolios-tutor/lista-portafolios-tutor.component';
import { ListaEstudiantesGeneralFormComponent } from './coordinador-general/lista-estudiantes-general/lista-estudiantes-general-form/lista-estudiantes-general-form.component';
import { ListaEstudiantesGeneralSearchComponent } from './coordinador-general/lista-estudiantes-general/lista-estudiantes-general-search/lista-estudiantes-general-search.component';



@NgModule({
  declarations: [
    //Docente Vinculacion-Portafolio
    PortafolioVinculacionComponent,
    SolicitudFormComponent,
    SolicitudSearchComponent,
    ProyectoFormComponent,
    ProyectoSearchComponent,
    AsignarFundacionFormComponent,
    AsignarFundacionSearchComponent,
    ConfiguracionVinculacionFormComponent,
    ConfiguracionVinculacionSearchComponent,

    //Docente Tutor-Portafolio

    EstudianteComponent,
    EstudiantePortafolioComponent,
    PortafolioComponent,
    SolicitudCertificadoComponent,
    ListaEstudiantesGeneralFormComponent,
    AvanceCumplimientoComponent,
    ObservacionAvanceComponent,
    AvanceCumplimientoComponent,
    InformeControlComponent,
    InformeInicialComponent,
    PrimerFormularioInicialComponent,
    SegundoFormularioInicialComponent,
    FormularioFinalTutorComponent,
    InformeFinalEstudianteComponent,
    EncuestaComponent,
    ActividadesComponent,
    AnexosComponent,
    BibliografiaComponent,
    CertificadosComponent,
    DatosGeneralesComponent,
    DocumentosComponent,
    EmpresaComponent,
    FirmasComponent,
    IntegrantesComponent,
    ObservacionesComponent,
    PlanDeTrabajoComponent,
    DashboardComponent,


    PortafolioTutorFormularioComponent,
    PortafolioTutorEstudianteComponent,
    PortafolioTutorTutorComponent,

    ListaFundacionTutorFromComponent,
    ListaFundacionTutorBuscarComponent,

    ListaEstudianteTutorFormComponent,
    ListaEstudianteTutorBuscarComponent,
    RedireccionarPrincipalComponent,
    AgregarRolAddComponent,
    AgregarRolSearchComponent,
    RellenarDatosFormComponent,
    ListaEstudiantesSearchComponent,
    ListaEstudiantesFormComponent,
    ListaPortafoliosFormComponent,
    ListaPortafoliosEstudiantesComponent,
    ListaPortafoliosTutorComponent,
    ListaEstudiantesGeneralSearchComponent,

  ],
  exports:[
    //Docente Vinculacion-Portafolio
    PortafolioVinculacionComponent,

    PortafolioComponent,
    SolicitudCertificadoComponent,
    ListaEstudiantesGeneralFormComponent,


    PortafolioTutorFormularioComponent,





    //Docente Tutor-Portafolio
    ListaFundacionTutorFromComponent,
    ListaEstudianteTutorFormComponent,




    EstudianteComponent,
    EstudiantePortafolioComponent,

    InformeInicialComponent,
    PrimerFormularioInicialComponent,
    SegundoFormularioInicialComponent,
    FormularioFinalTutorComponent,
    InformeFinalEstudianteComponent,

    ActividadesComponent,
    AnexosComponent,
    BibliografiaComponent,
    CertificadosComponent,
    DatosGeneralesComponent,
    DocumentosComponent,
    EmpresaComponent,
    FirmasComponent,
    IntegrantesComponent,
    ObservacionesComponent,
    PlanDeTrabajoComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
  ]
})
export class PagesModule { }
