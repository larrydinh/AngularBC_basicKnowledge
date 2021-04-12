import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //tên thẻ   <app-root><app-root>
  templateUrl: './app.component.html',//thành phần giao diện:template 
  styleUrls: ['./app.component.scss']//đường dẫn đến file css
})
//xử lí các nút trên giao diện thẻ   <app-root><app-root>
export class AppComponent {
  title = 'angular01';
}
