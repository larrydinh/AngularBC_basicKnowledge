import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from 'src/app/bai-tap-layout/sidebar/sidebar.component';
import { BaiTapLayoutComponent } from 'src/app/bai-tap-layout/bai-tap-layout.component';
import { ContentsComponent } from 'src/app/bai-tap-layout/contents/contents.component';
import { FooterComponent } from 'src/app/bai-tap-layout/footer/footer.component';
import { HeaderComponent } from 'src/app/bai-tap-layout/header/header.component';



@NgModule({
  declarations: [
    BaiTapLayoutComponent,
    HeaderComponent,
    FooterComponent,
    ContentsComponent,
    SidebarComponent],
  imports: [
    CommonModule
  ],
  exports:[BaiTapLayoutComponent]
  // xuất component ra để khi import module này vào module khác thì component này có thể sử dụng trong module khác
})
export class BaiTapLayoutModule { }
