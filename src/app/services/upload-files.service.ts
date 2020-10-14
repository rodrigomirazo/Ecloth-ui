import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {

  private itemUploadImage: string = environment.host + environment.baseUrl + environment.entity.itemImage;
  private getItemImages: string = environment.host + environment.baseUrl + environment.entity.getItemImage;

  constructor(private http: HttpClient) { }

  upload(file: File, userId: number, itemId: number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    
    formData.append('file', file);

    const req = new HttpRequest('POST', this.itemUploadImage + "/" + userId + "/" + itemId, formData, {
      reportProgress: true,
      responseType: 'text',
      
    });

    return this.http.request(req);
  }

  getFiles(userId: number, itemId: number): Observable<any> {
    return this.http.get(this.getItemImages);
  }
}
