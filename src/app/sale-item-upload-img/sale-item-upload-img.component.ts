import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UploadFilesService } from '../_services/upload-files.service';

@Component({
  selector: 'app-sale-item-upload-img',
  templateUrl: './sale-item-upload-img.component.html',
  styleUrls: ['./sale-item-upload-img.component.css']
})
export class SaleItemUploadImgComponent implements OnInit {

  @Input()
  itemId: string;
  
  @Output()
  propagate: EventEmitter<File[]> = new EventEmitter<any[]>();
  
  @Output()
  imgSelectIsValid: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  /** File Uploading */
  _files: File[];
  _uploadFlag: boolean;
  
  fileChecks: boolean[] = [];
  
  constructor(private uploadFilesService: UploadFilesService) { }

  ngOnInit() {
    for (let i = 0; i < 6; i++)
      this.fileChecks = this.fileChecks.concat(false);
  }

  @Input()
	public get files(): File[] {
		return this._files;
  }
	public set files(value: File[]) {
    this._files = value;
  }

  // uploadFlag
  @Input()
  public get uploadFlag(): boolean {
    return this._uploadFlag;
  }
  public set uploadFlag(value: boolean) {
    this._uploadFlag = value;
  }

  checkImg(imgIndex: number, optional?: boolean) {
    if(!optional) {
      this.fileChecks[imgIndex] = true;
    }
    let isValid = true;
    this.fileChecks.forEach(element => {
      if(!element) {
        isValid = false;
      }
    });
    console.log(isValid);
    if(isValid) {
      this.imgSelectIsValid.emit(true);
    }
  }
  
}
