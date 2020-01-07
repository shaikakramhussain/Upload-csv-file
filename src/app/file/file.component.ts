import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent  {

  fileContent: any;
  constructor(private router: Router){}
  public onChange(fileList: FileList): void {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function(x) {
      self.fileContent = fileReader.result;
    }
    fileReader.readAsText(file);
  }
  @Output() show = new EventEmitter();

  call() {
    if (this.fileContent == undefined)
    {
      alert("Please upload file");
    }else{
      this.show.emit(this.fileContent);
      this.router.navigate(['/', 'details']);
      console.log(this.fileContent); 
  }
}
}
