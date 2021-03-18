import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UploadFilesService } from 'src/app/_services/upload-files.service';

@Component({
  selector: 'app-item-image-preview',
  templateUrl: './item-image-preview.component.html',
  styleUrls: ['./item-image-preview.component.css']
})
export class ItemImagePreviewComponent {

  fileData: File;
  _height: string;
  _width: string;
  _uploadFlag: boolean;

  @Input()
  private itemId: string;

  //TODO: change to file type
  @Output()
  propagate: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  imgSelectEmit = new EventEmitter<boolean>();

  formData: FormData;
  form: FormGroup = new FormGroup({
    file: new FormControl()
  });

  previewUrl: any = null;

  constructor(private uploadFilesService: UploadFilesService,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 6000,
    });
  }

  heightStyle() {
    let styles = {
      'height': this.height + 'em',
      'width': this.width + 'em',
      'display': 'block',
      'margin-left': 'auto',
      'margin-right': 'auto',
      'object-fit': 'cover',
    };
    return styles;
  }

  openFile() {
    console.log("fileIncrement");
    document.querySelector('input').click()
  }

  fileProgress(fileInput: any) {
    fileInput.preventDefault();
    this.fileData = <File>fileInput.target.files[0];

    // Show preview
    var mimeType = this.fileData.type;
    if (
        mimeType.toLowerCase() == ("image/jpeg").toLowerCase() ||
        mimeType.toLowerCase() == ("image/PNG").toLowerCase() ||
        mimeType.toLowerCase() == ("image/JPG").toLowerCase() ||
        mimeType.toLowerCase() == ("image/jpg").toLowerCase()
      ) {
      console.log("Correct format: " + mimeType);
    } else {
      this.openSnackBar("El Formato de la imagen solo puede ser JPEG, JPG, PNG o JPG", "Cerrar");
      return;
    }

    var sizeInK = this.fileData.size / 1024;
    if ( sizeInK > 500) {
      this.openSnackBar("El Tamaño de la imagen debe ser menor de los 500 KB", "Cerrar");
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.imgSelectEmit.emit(false);
      this.previewUrl = reader.result;
    }
  }

  // uploadFlag
  @Input()
  public get uploadFlag(): boolean {

    if(this.uploadFlag == true) {
      //console.log("Get upload file true", this.fileData);
    } else {
      //console.log("Get upload file false");
    }

    return this._uploadFlag;
  }

  public set uploadFlag(value: boolean) {
    console.log("this.itemId = " + this.itemId);
    if(value == true && this.fileData && this.itemId != null) {
      console.log("Before upload");
      this.uploadFilesService.upload(this.fileData, this.itemId);
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

  @Input()
	public get width(): string {
		return this._width;
  }
	public set width(value: string) {
    this._width = value;
  }

  
  onSubmit($event: any) {
    $event.preventDefault();
  }

}
