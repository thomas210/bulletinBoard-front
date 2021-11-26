import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ResponseNotices } from './notice.model';

@Injectable({
  providedIn: 'root'
})
export class NoticesService {

  private url = "http://localhost:8080/notices";

  constructor(private http: HttpClient) { }

  getNotices(page: Number = 0): Observable<ResponseNotices> {
    return this.http.get<ResponseNotices>(this.url+"?page="+page);
  }

}