import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Notice, RequestCreate } from '../notice.model';
import { NoticesService } from '../notices.service';

@Component({
  selector: 'app-update-notice',
  templateUrl: './update-notice.component.html',
  styleUrls: ['./update-notice.component.css']
})
export class UpdateNoticeComponent implements OnInit {

  request!: Notice;
  id!: String;

  constructor(private noticesService: NoticesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    this.noticesService.readNotice(this.id).subscribe(res =>
      this.request = res
    );
  }

  update() {
    this.noticesService.updateNotice(this.id, this.request).subscribe();
    this.router.navigate(['/notices'])
  }

}
