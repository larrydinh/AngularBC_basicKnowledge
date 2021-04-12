import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { BaiTapLayoutComponent } from './bai-tap-layout/bai-tap-layout.component';
import { HeaderComponent } from './bai-tap-layout/header/header.component';
import { FooterComponent } from './bai-tap-layout/footer/footer.component';
import { ContentsComponent } from './bai-tap-layout/contents/contents.component';
import { SidebarComponent } from './bai-tap-layout/sidebar/sidebar.component';
import { BaiTapLayoutModule } from './Modules/bai-tap-layout/bai-tap-layout.module';
import { OneWayBindingComponent } from './Modules/data-binding/one-way-binding/one-way-binding.component';
import { DataBindingModule } from './Modules/data-binding/data-binding.module';

@NgModule({
  declarations: [ /// những thẻ có thể sử dụng đc cho module này
    AppComponent,
    DemoComponent,
  ],
  imports: [ // Các module khác muốn đc sử dụng trong module này thì phải import vào
    BrowserModule, BaiTapLayoutModule, DataBindingModule
  ],
  providers: [], // nơi chứa các service muốn sử dụng đc cho module này khai báo tại đây
  bootstrap: [AppComponent] // các component sủ dụng đc trong file index.html (khởi tạo)
})
export class AppModule { }
