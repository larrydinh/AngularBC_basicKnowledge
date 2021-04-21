import { Component, OnInit, Input } from '@angular/core';

//interface: class trừu tượng (không thể tạo đối tượng từ interface => không thể new)
//khi implements (gần giống kế thừa) phải định nghĩa toàn bộ các phương thức của interface
//Các phương thức trong interface không đc định nghĩa sẽ đc định nghĩa cụ thể từ class con implements
class SanPham {
  maSP: number;
  tenSP: string;
  hinhAnh: string;
  gia: number;
}

@Component({
  selector: 'app-san-pham',
  template:`
  <div class="card text-left">
    <img class="card-img-top" [src]="sanPham.hinhAnh" alt="">
    <div class="card-body">
      <h4 class="card-title">{{sanPham.tenSP}}</h4>
      <p class="card-text">{{sanPham.gia}}</p>
    </div>
  </div>`,
  styleUrls: ['./san-pham.component.scss']
})


export class SanPhamComponent implements OnInit {

  @Input() sanPham: SanPham = new SanPham();
  constructor() { }

  ngOnInit(): void {
  }

}
