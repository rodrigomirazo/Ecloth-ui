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

  upload(file: File, itemId: string): Observable<any> {
    console.log("inside uploadService: ", file);
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post(this.itemUploadImage + "/" + itemId, formData);
  }

  getFiles(userId: number, itemId: number): Observable<any> {
    return this.http.get(this.getItemImages);
  }
}
