import { Component, ViewChild } from '@angular/core';
import { DanhSachSanPhamComponent } from './domangular/danh-sach-san-pham/danh-sach-san-pham.component';

interface SanPham {
  maSP: number;
  tenSP: string;
  hinhAnh: string;
  gia: number;
}

@Component({
  selector: 'app-root', // tên thẻ   <app-root><app-root>
  templateUrl: './app.component.html', // thành phần giao diện:template
  styleUrls: ['./app.component.scss'], // đường dẫn đến file css
})
// xử lí các nút trên giao diện thẻ   <app-root><app-root>
export class AppComponent {
  title = 'angular01';
  @ViewChild('btnThemSanPham') tagButtonThem: any;
  @ViewChild('tagDSSP') tagDSSP: DanhSachSanPhamComponent;
  themSanPham(sanPham:SanPham): void {
    //  document.getElementById('btnThemSanPham').id);
    // ViewChild dung de dom đến các thẻ lấy ra thuộc tính và phương thức của thẻ đó
    // attribute la cac tuoc tinh tren the (chung ta co the tao them)
    // properties la cac thuoc tinh co san trong doi tuong
    // alert(this.tagButtonThem.id);
    console.log(this.tagButtonThem.nativeElement.id);
    console.log(this.tagButtonThem.nativeElement.className);
    console.log(this.tagButtonThem.nativeElement.getAttribute('theButton'));
    this.tagButtonThem.nativeElement.className = 'btn btn-danger';
    // this.tagDSSP.mangSanPham.push({maSP:4,tenSP:'Samsung',gia:1000,hinhAnh:'https://picsum.photos/200'})
    this.tagDSSP.mangSanPham.push({...sanPham,hinhAnh:'https://picsum.photos/200'})
  }
}
