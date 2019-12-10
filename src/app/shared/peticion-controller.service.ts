import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { timingSafeEqual } from 'crypto';

@Injectable({
     providedIn: 'root'
})
export class PeticionControllerService {


     public cursoUnoAntesRecreo: String[] = [
          "PROGRAMACION", "PROGRAMACION", "FOL", "SISTEMA", "FOL",
          "PROGRAMACION", "PROGRAMACION", "PROGRAMACION", "BBDD", "BBDD",
          "FOL", "BBDD", "SISTEMA", "BBDD", "BBDD"
     ];
     public cursoUnoDespuesRecreo: String[] = [
          "SISTEMA", "SISTEMA", "PROGRAMACION", "BBDD", "PROGRAMACION",
          "SISTEMA", "SISTEMA", "SISTEMA", "PROGRAMACION", "BBDD",
          "FOL", "SISTEMA", "BBDD", "PROGRAMACION", "SISTEMA"
     ];
     public cursoDosAntesRecreo: String[] = [
          "DEDIN", "DEDIN", "PMYDM", "PMYDM", "DEDIN",
          "DEDIN", "DEDIN", "PMYDM", "PMYDM", "DEDIN",
          "DEDIN", "ACADT", "PMYDM", "PMYDM", "ACADT",
     ];

     public cursoDosDespuesRecreo: String[] = [
          "ACADT", "ACADT", "FCT", "FCT", "ACADT",
          "ACADT", "EIE", "FCT", "FCT", "SIGEE",
          "ACADT", "EIE", "PRSYP", "FCT", "SIGEE"];



     constructor() {
          this.cursoUnoAntesRecreo;
          this.cursoUnoDespuesRecreo;
          this.cursoDosAntesRecreo;
          this.cursoDosDespuesRecreo;
     }

}
