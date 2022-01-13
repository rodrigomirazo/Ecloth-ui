import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {

  private itemUploadImage: string = environment.host + environment.baseUrl + environment.entity.itemImage;
  private getItemImages: string = environment.host + environment.baseUrl + environment.entity.getItemImage;
  
  constructor(private http: HttpClient) { }

  upload(file: File, itemId: string, imgId: string): Observable<any> {
    console.log("inside uploadService: ", this.itemUploadImage + "/" + itemId + "/" + imgId);
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post(this.itemUploadImage + "/" + itemId + "/" + imgId, formData);
  }

  getFiles(userId: number, itemId: number): Observable<any> {
    return this.http.get(this.getItemImages);
  }
}
