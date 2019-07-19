import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: MainPage,
    children: [
      {
        path: 'notice',
        children: [
          {
            path: '',
            loadChildren: './notice/notice.module#NoticePageModule'
          },
          {
            path: 'detail/:noticeId',
            loadChildren: './notice/notice-detail/notice-detail.module#NoticeDetailPageModule'
          }
        ]
      },
      {
        path: 'course',
        children: [
          {
            path: '',
            loadChildren: './course/course.module#CoursePageModule'
          //},
          //{
            //path: '',
            //loadChildren: './main/tabs/course',
            //pathMatch:'full'
          }
        ]
      },

      {
        path: 'feedback',
        children: [
          {
            path: '',
            loadChildren: './feedback/feedback.module#FeedbackPageModule'
          }]},

      {
        path: 'routine',
        children: [
          {
            path: '',
            loadChildren: './routine/routine.module#RoutinePageModule'
          }
        ]
      },
      {
          path: '',
          redirectTo: '/main/tabs/routine',
          pathMatch: 'full'
      }
    ]
  }
,
{
    path: '',
    redirectTo: '/main/tabs/routine',
    pathMatch: 'full'
}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
