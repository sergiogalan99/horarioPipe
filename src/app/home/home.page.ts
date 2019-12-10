import { Component } from '@angular/core';
import { PeticionControllerService } from '../shared/peticion-controller.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public arrayDias = [0, 1, 2, 3, 4];
  public arrayHoras = [0, 1, 2, 3, 4, 5, 6];
  public arrayCurso = [0, 1];
  public seleccionCurso = "";

  public arrayCursoUnoAntesRecreo = [];
  public arrayCursoUnoDespuesRecreo = [];
   public arrayCursoDosAntesRecreo= [];
   public arrayCursoDosDespuesRecreo = [];
 

  constructor(public peticionService: PeticionControllerService) {
    this.arrayCursoUnoAntesRecreo = this.peticionService.cursoUnoAntesRecreo;
    this.arrayCursoUnoDespuesRecreo = this.peticionService.cursoUnoDespuesRecreo;
    this.arrayCursoDosAntesRecreo = this.peticionService.cursoDosAntesRecreo;
    this.arrayCursoDosDespuesRecreo = this.peticionService.cursoDosDespuesRecreo;
   
  }

}
