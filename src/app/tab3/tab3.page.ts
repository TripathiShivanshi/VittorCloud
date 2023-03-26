import { Component } from '@angular/core';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public myAngularxQrCode: string = '';

  constructor(public modalCtrl: ModalController,private socialShare:SocialSharing) {
    this.myAngularxQrCode = 'Your QR code data string';
  }

  qrgenerator(){
    let r = (Math.random() + 1).toString(36).substring(7);
    console.log("random", r);
    this.myAngularxQrCode = r;
  }
  sendShare(message:any, subject:any, url:any) {
    this.socialShare.share(message, subject, url);
    console.log("Success");
  }
  async shareqr(){
      // const modal = await this.modalCtrl.create({
      //   component: SocialShareComponent,
      //   cssClass: 'backTransparent',
      //   backdropDismiss: true
      // });
      // return modal.present();
      // this.socialShare.canShareViaEmail().then(() => {
        // console.log("Success");
        this.socialShare.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
          // Success!
          console.log("Success");
        }).catch(() => {
          // Error!

          console.log("Error");
        });
        // Sharing via email is possible
      // }).catch(() => {
      //   console.log("err");
      //   // Sharing via email is not possible
      // });
    
  }

}
