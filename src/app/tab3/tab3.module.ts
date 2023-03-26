import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { QRCodeModule } from 'angularx-qrcode';
// import { SocialSharing } from '@ionic-native/social-sharing/ngx';
// import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
    QRCodeModule,
    
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
