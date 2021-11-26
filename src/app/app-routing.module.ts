import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoticeComponent } from './notices/create-notice/create-notice.component';
import { NoticesComponent } from './notices/notices.component';

const routes: Routes = [
  {path: 'notices', component: NoticesComponent},
  {path: 'notices/create', component: CreateNoticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
