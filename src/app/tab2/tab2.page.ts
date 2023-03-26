import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  isToorchOn: boolean = false;
  bardata:any;

  constructor(private barcodeScanner:BarcodeScanner ) {}


  gotoClick(){
    const options: BarcodeScannerOptions = {
      showFlipCameraButton: true,
      showTorchButton: true,
    };
    this.barcodeScanner.scan(options).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.bardata = barcodeData;
     },).catch(err => {
         console.log('Error', err);
     });
  }

}
