import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FileUpload';
  status: boolean = true;

  data: any;
  fn(e) {
    this.data = e;
    this.status = false;
  }
}
