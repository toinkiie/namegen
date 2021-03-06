import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NameGeneratorModule } from './modules/name-generator/name-generator.module';
import { Regions } from './models/regions.model';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    NameGeneratorModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: Regions, useClass: Regions }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
