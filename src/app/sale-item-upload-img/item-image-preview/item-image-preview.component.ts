import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UploadFilesService } from 'src/app/services/upload-files.service';

@Component({
  selector: 'app-item-image-preview',
  templateUrl: './item-image-preview.component.html',
  styleUrls: ['./item-image-preview.component.css']
})
export class ItemImagePreviewComponent {

  fileData: File;
  _height: string;
  _uploadFlag: boolean;

  @Input()
  private itemId: string;

  //TODO: change to file type
  @Output()
  propagate: EventEmitter<any> = new EventEmitter<any>();

  formData: FormData;
  form: FormGroup = new FormGroup({
    file: new FormControl()
  });

  previewUrl: any = null;

  constructor(private uploadFilesService: UploadFilesService,
    private http: HttpClient,
    private formBuilder: FormBuilder) { }

  heightStyle() {
    let styles = {
      'height': this.height + 'px',
    };
    return styles;
  }

  openFile() {
    console.log("fileIncrement");
    document.querySelector('input').click()
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];

    // Show preview
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      
      this.previewUrl = reader.result;
    }
  }

  // uploadFlag
  @Input()
  public get uploadFlag(): boolean {

    if(this.uploadFlag == true) {
      console.log("Get upload file true", this.fileData);
    } else {
      console.log("Get upload file false");
    }

    return this._uploadFlag;
  }
  public set uploadFlag(value: boolean) {

    if(value == true && this.fileData) {
      console.log("set upload file true", this.fileData);

      this.uploadFilesService.upload(this.fileData, this.itemId)
      .subscribe(res => {
        console.log(res);
        alert('SUCCESS !!');
      });

    } else {
      console.log("set upload file false");
    }
    this._uploadFlag = value;
  }

  // FileInput
  @Input()
	public get height(): string {
		return this._height;
  }
	public set height(value: string) {
    this._height = value;
  }

}
