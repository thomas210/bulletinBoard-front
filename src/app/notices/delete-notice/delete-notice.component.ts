import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Notice } from '../notice.model';
import { NoticesService } from '../notices.service';

@Component({
  selector: 'app-delete-notice',
  templateUrl: './delete-notice.component.html',
  styleUrls: ['./delete-notice.component.css']
})

// To delete the notice, first the notice data is shown and a confirmation is requested.
export class DeleteNoticeComponent implements OnInit {

  request!: Notice;
  id!: String;

  constructor(private noticesService: NoticesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    this.noticesService.readNotice(this.id).subscribe(res =>
      this.request = res
    );
  }

  delete() {
    this.noticesService.deleteNotice(this.id).subscribe(res => {
      alert("Successfully deleted")
    })
    this.router.navigate(['/notices'])
  }

}
