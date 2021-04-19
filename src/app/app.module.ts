import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { BaiTapLayoutModule } from './Modules/bai-tap-layout/bai-tap-layout.module';
import { DataBindingModule } from './Modules/data-binding/data-binding.module';
import { DirectivesModule } from './Modules/directives/directives.module';
import { InteractionModule } from './Modules/interaction/interaction.module';

@NgModule({
  declarations: [ /// những thẻ có thể sử dụng đc cho module này
    AppComponent,
    DemoComponent,
  ],
  imports: [ // Các module khác muốn đc sử dụng trong module này thì phải import vào
    BrowserModule, BaiTapLayoutModule, DataBindingModule, DirectivesModule, InteractionModule
  ],
  providers: [], // nơi chứa các service muốn sử dụng đc cho module này khai báo tại đây
  bootstrap: [AppComponent] // các component sủ dụng đc trong file index.html (khởi tạo)
})
export class AppModule { }
