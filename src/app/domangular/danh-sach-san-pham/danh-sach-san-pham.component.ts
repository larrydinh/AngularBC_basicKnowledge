import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { SanPhamComponent } from '../san-pham/san-pham.component';
interface SanPham {
  maSP: number;
  tenSP: string;
  hinhAnh: string;
  gia: number;
}

@Component({
  selector: 'app-danh-sach-san-pham',
  template: `
    <h3 class="text-center">Danh sach san pham</h3>
    <div class="row">
      <div class="col-4" *ngFor="let sanPham of mangSanPham">
        <app-san-pham [sanPham]="sanPham"></app-san-pham>
        <button class="btn btn-success" (click)="thayDoiGia()">
          Thay doi gia
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./danh-sach-san-pham.component.scss'],
})
export class DanhSachSanPhamComponent implements OnInit {
  // mangSanPham: Array<SanPham>=[];
  mangSanPham: SanPham[] = [
    {
      maSP: 1,
      tenSP: 'IphoneX',
      hinhAnh: 'https://picsum.photos/200',
      gia: 1000,
    },
    {
      maSP: 2,
      tenSP: 'IphoneXS',
      hinhAnh: 'https://picsum.photos/200',
      gia: 2000,
    },
    {
      maSP: 3,
      tenSP: 'IphoneXR',
      hinhAnh: 'https://picsum.photos/200',
      gia: 3000,
    },
  ];
  @ViewChildren(SanPhamComponent) dsTagSanPham: QueryList<SanPhamComponent>;
  constructor() {}
  thayDoiGia() {
    // document.querySelectorAll('tagName .class'); //viewchildren
    let arrayTagSP = this.dsTagSanPham.toArray(); // dom den cac tag <app-san-pham></app-san-pham>

    this.dsTagSanPham.forEach((item: SanPhamComponent, index: number) => {
      if (item.sanPham.maSP === 2) {
        item.sanPham.gia = 1000;
      }
    });
    // arrayTagSP[1].sanPham.gia =100000;
  }
  ngOnInit(): void {}
}
