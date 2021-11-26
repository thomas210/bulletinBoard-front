import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoticeComponent } from './notices/create-notice/create-notice.component';
import { DeleteNoticeComponent } from './notices/delete-notice/delete-notice.component';
import { NoticesComponent } from './notices/notices.component';
import { UpdateNoticeComponent } from './notices/update-notice/update-notice.component';
import { ViewNoticeComponent } from './notices/view-notice/view-notice.component';

const routes: Routes = [
  {path: 'notices', component: NoticesComponent},
  {path: 'notices/create', component: CreateNoticeComponent},
  {path: 'notices/view/:id', component: ViewNoticeComponent},
  {path: 'notices/update/:id', component: UpdateNoticeComponent},
  {path: 'notices/delete/:id', component: DeleteNoticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
