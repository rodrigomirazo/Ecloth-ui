import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any> {
    return this.http.get(url);
  }

  getWithHeaders(url: string, headers: any): Observable<any> {
    return this.http.get(url, headers);
  }

  getBodyRequest(url: string, body: any): Observable<any> {
    return this.http.get(url, body);
  }

  post(url: string, requestBody: any): Observable<any> {
    return this.http.post(url, requestBody);
  }

  put(url: string, requestBody: any): Observable<any> {
    return this.http.put(url, requestBody);
  }

  delete(url: string, options: any): Observable<any> {
    return this.http.delete(url, options);
  }

}
