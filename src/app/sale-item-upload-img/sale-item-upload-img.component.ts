import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UploadFilesService } from '../_services/upload-files.service';

@Component({
  selector: 'app-sale-item-upload-img',
  templateUrl: './sale-item-upload-img.component.html',
  styleUrls: ['./sale-item-upload-img.component.css']
})
export class SaleItemUploadImgComponent implements OnInit {

  @Input()
  private itemId: string;
  
  @Output()
  propagate: EventEmitter<File[]> = new EventEmitter<any[]>();
  
  /** File Uploading */
  _files: File[];
  _uploadFlag: boolean;
  
  
  constructor(private uploadFilesService: UploadFilesService) { }

  ngOnInit() {

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
  
}
