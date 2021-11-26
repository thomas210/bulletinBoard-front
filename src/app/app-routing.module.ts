import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticesComponent } from './notices/notices.component';

const routes: Routes = [
  {path: 'notices', component: NoticesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
