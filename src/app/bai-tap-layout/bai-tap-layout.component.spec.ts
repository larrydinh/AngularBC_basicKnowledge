import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTapLayoutComponent } from './bai-tap-layout.component';

describe('BaiTapLayoutComponent', () => {
  let component: BaiTapLayoutComponent;
  let fixture: ComponentFixture<BaiTapLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiTapLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTapLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
