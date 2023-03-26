import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
// import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,ReactiveFormsModule,NgxScannerQrcodeModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },SocialSharing,BarcodeScanner],
  bootstrap: [AppComponent],
})
export class AppModule {}
