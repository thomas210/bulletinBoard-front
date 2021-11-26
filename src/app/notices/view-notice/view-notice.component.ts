import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notice } from '../notice.model';
import { NoticesService } from '../notices.service';

@Component({
  selector: 'app-view-notice',
  templateUrl: './view-notice.component.html',
  styleUrls: ['./view-notice.component.css']
})
export class ViewNoticeComponent implements OnInit {

  response: Notice | undefined

  pipe = new DatePipe('en-US'); // Use your own locale

  constructor(private noticesService: NoticesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.noticesService.readNotice(this.route.snapshot.params["id"]).subscribe(res =>
      this.response = res
    );
  }

}
