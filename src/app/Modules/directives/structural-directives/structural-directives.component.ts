import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  template: `
    <h3>NgIf: Dùng để ẩn hiện 1 tag/component</h3>
    <p *ngIf="isActive">Cybersoft</p>
    <button (click)="isActive = !isActive">Toggle</button>
    <!-- UI khi da dang nhap  -->
    <div *ngIf="isLoggedIn; else loginTemplate">
      <p>Welcome Fack</p>
      <button (click)="isLoggedIn = false">Log Out</button>
    </div>
    <!-- UI khi chua dang nhap  -->
    <!-- <div *ngIf="!isLoggedIn">
  <p>Please login</p>
  <button (click)="isLoggedIn = true">Log In</button>
</div> -->
    <!-- ng-template: mặc định nội dung bên trong thẻ này ko đc hiện ra giao diện  -->
    <!-- template vảiable: #...  -->
    <ng-template #loginTemplate>
      <div *ngIf="!isLoggedIn">
        <p>Please login</p>
        <button (click)="isLoggedIn = true">Log In</button>
      </div>
    </ng-template>
    <h3>NgSwitch: ẩn hiện tag/component với 1 danh sách các điều kiện</h3>
    <div [ngSwitch]="color">
      <p *ngSwitchCase="'primary'" class="bg-primary">Primary</p>
      <p *ngSwitchCase="'secondary'" class="bg-secondary">secondary</p>
      <p *ngSwitchCase="'success'" class="bg-success">success</p>
      <p *ngSwitchCase="'danger'" class="bg-danger">danger</p>
      <p *ngSwitchDefault>Default</p>
    </div>
    <select [value]="color" (change)="changeColor($event)">
      <option value="primary" class="bg-primary">primary</option>
      <option value="secondary" class="bg-secondary">secondary</option>
      <option value="success" class="bg-success">success</option>
      <option value="danger" class="bg-danger">danger</option>
      <option value="">Default</option>
    </select>
    <h3>NgFor: Duyet mang</h3>
    <p *ngFor="let student of Students; let idx = index; count as total">
      {{ idx + 1 }}/{{ total }} Name: {{ student.name }}. Age: {{ student.age }}
    </p>
    <!-- kiểm tra students khác null hoặc undefined mới duyệt mảng  -->
    <!-- không cho phép 2 structural directives trên cùng 1 thẻ  -->
    <!-- ng-container hoạt động tương tự Fragmenet bên react, chỉ render nội dung bên trong ra UI  -->

    <ng-container *ngIf="Students">
      <p *ngFor="let student of Students">
        ng-container Name: {{ student.name }}. Age: {{ student.age }}
      </p>
    </ng-container>
    <!-- Kết hợp ng-template và ng-container để tái sử dụng 1 đoạn UI -->
    <!-- Bọc đoạn code cần tái sử dụng bên trong ng-template -->
    <ng-template #templateAlert>
      <div class="alert alert-danger">
        <span>Something's wrong</span>
      </div>
    </ng-template>
    <!-- Chỗ nào cần sử dụng ta sẽ gọi ng-ng-container với directive ngTemplateOutlet  -->
    <ng-container *ngTemplateOutlet="templateAlert"></ng-container>
    <ng-container *ngTemplateOutlet="templateAlert"></ng-container>
    <ng-container *ngTemplateOutlet="templateAlert"></ng-container>
  `,
  styleUrls: ['./structural-directives.component.scss'],
})
export class StructuralDirectivesComponent implements OnInit {
  isActive: boolean = true;
  isLoggedIn: boolean = false;
  color: string = 'primary';
  Students: any[] = [
    { name: 'Quẩy', age: 25 },
    { name: 'WUT', age: 21 },
    { name: 'Quỡn', age: 22 },
  ];
  constructor() {}
  changeColor(event: any) {
    this.color = event.target.value;
  }
  ngOnInit(): void {}
}
