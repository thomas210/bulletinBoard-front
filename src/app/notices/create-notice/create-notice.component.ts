import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notice, RequestCreate } from '../notice.model';
import { NoticesService } from '../notices.service';

@Component({
  selector: 'app-create-notice',
  templateUrl: './create-notice.component.html',
  styleUrls: ['./create-notice.component.css']
})
export class CreateNoticeComponent implements OnInit {

  request: RequestCreate = {
    title: '',
    description: ''
  }

  response: Notice | undefined

  constructor(private noticesService: NoticesService, private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    this.noticesService.createNotice(this.request).subscribe(res => {
      this.response = res
    });
    this.router.navigate(['/notices'])
  }

}
