import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExercisesPageRoutingModule } from './exercises-routing.module';

import { ExercisesPage } from './exercises.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ExercisesPageRoutingModule
  ],
  declarations: [ExercisesPage]
})
export class ExercisesPageModule {}
