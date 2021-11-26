import { Component, OnInit } from '@angular/core';
import { ResponseNotices } from './notice.model';
import { NoticesService } from './notices.service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {

  responseNotices!: ResponseNotices;

  constructor(private noticeService: NoticesService) { }

  ngOnInit(): void {
    this.listNoticesPage()
  }

  listNoticesPage(page: Number = 0): void {
    this.noticeService.getNotices(page).subscribe(
      res => this.responseNotices = res
    )
  }

}
