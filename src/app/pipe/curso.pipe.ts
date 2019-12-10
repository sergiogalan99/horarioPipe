import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cursos'
})
export class CursoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let cursos = ["Primero", "Segundo"];
    return cursos[value];
  }

}
