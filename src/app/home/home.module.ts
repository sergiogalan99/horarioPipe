import { CursoPipe } from './../pipe/curso.pipe';

import { HorasPipe } from './../pipe/horas.pipe';
import { DiasPipe } from './../pipe/dias.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, DiasPipe, HorasPipe, CursoPipe]
})
export class HomePageModule { }
