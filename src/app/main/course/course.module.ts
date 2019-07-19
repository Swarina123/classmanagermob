import { IonicModule } from '@ionic/angular';
import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursePage } from './course.page';

const routes: Routes = [
  {
    path: '',
    component: CoursePage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: CoursePage }])
  ],
  declarations: [CoursePage]
})
export class CoursePageModule {}
