import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  loginForm:FormGroup;

  constructor(private fb:FormBuilder,private toastController:ToastController) {
    this.loginForm=this.fb.group({
      email: ['',[Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  gotoSubmit(form:any){
    console.log('form:',this.loginForm.value.email,this.loginForm.value.password);
    if(this.loginForm.value.email == 'test@test.com' && this.loginForm.value.password == '8256455'){
        this.presentToast('Authorized user','greenBg');
       } else {
        this.presentToast('unAuthorized user','redBg');

 }
  }
  async presentToast(msg:any,bgC:any) {
    const toast = await this.toastController.create({
      message:msg,
      duration: 1500,
      cssClass:bgC,
    });

    await toast.present();
  }

}
