import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Notice, RequestCreate, ResponseNotices } from './notice.model';

@Injectable({
  providedIn: 'root'
})
export class NoticesService {

  private url = "http://localhost:8080/notices";

  constructor(private http: HttpClient) { }

  // FindAll()
  getNotices(page: Number = 0): Observable<ResponseNotices> {
    const _url = `${this.url}?page=${page}`
    return this.http.get<ResponseNotices>(_url);
  }

  // Create
  createNotice(request: RequestCreate): Observable<Notice> {
    return this.http.post<Notice>(this.url, request);
  }

  // Read
  readNotice(id: String): Observable<Notice> {
    const _url = `${this.url}/${id}`;
    return this.http.get<Notice>(_url);
  }

  // Update
  updateNotice(id: String, request: RequestCreate): Observable<Notice> {
    const _url = `${this.url}/${id}`;
    return this.http.put<Notice>(_url, request);
  }

  // Delete
  deleteNotice(id: String): Observable<any> {
    const _url = `${this.url}/${id}`;
    return this.http.delete<any>(_url);
  }

}
