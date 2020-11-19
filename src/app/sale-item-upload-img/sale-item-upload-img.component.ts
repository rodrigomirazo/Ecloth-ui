import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-item-upload-img',
  templateUrl: './sale-item-upload-img.component.html',
  styleUrls: ['./sale-item-upload-img.component.css']
})
export class SaleItemUploadImgComponent implements OnInit {

  /** File Uploading */
  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  constructor() { }

  ngOnInit() {
  }

  openFile(){
    console.log('hell')
    document.querySelector('input').click()
  }

  handle(e){
    console.log('Change input file')
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
}

preview() {
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



}
