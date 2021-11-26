import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticesComponent } from './notices/notices.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateNoticeComponent } from './notices/create-notice/create-notice.component'
import { FormsModule } from '@angular/forms';
import { ViewNoticeComponent } from './notices/view-notice/view-notice.component';
import { UpdateNoticeComponent } from './notices/update-notice/update-notice.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticesComponent,
    CreateNoticeComponent,
    ViewNoticeComponent,
    UpdateNoticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
