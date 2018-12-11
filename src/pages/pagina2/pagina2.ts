import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {
// import AlertController
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl:AlertController, private loadingCtrl: LoadingController) {
  }

  ir_pagina3(){
    //invocar el nombre en pagina3.module.ts
    //this.navCtrl.push("Pagina3Page");
    // otra forma de referenciar por el name de @ionicpage de pagina3.ts
    this.navCtrl.push("mi-pagina3");
   
    
  }
  ir_pagina4(){//invocar el nombre en pagina3.module.ts
    this.navCtrl.push("Pagina4Page");

  }
 ionViewDidLoad(){
    console.log("ionViewDidLoad");
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter");
  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter");
  }

  ionViewWillLeave(){
    console.log("ionViewWillLeave");
  }

  ionViewDidLeave(){
    console.log("ionViewDidLeave");
  }

  ionViewWillUnload(){
    console.log("ionViewWillUnload");
  }

  ionViewCanEnter_antiguo(){
    console.log("ionViewCanEnter");
    let numero= Math.round(Math.random()*10);
    console.log(numero);
    if(numero >=3){
      return true;
    }
    else{
      return false;
    }

  }
//renombrar el ionViewCanEnter anterior a ionViewCanEnter_antiguo
ionViewCanEnter(){
  console.log("ionViewCanEnter");
 let promesa= new Promise((resolve, reject)=> {
  let confirmar=this.alertCtrl.create({
  
      title: 'seguro',
      message: 'quieres entrar',
      buttons: [
        {
          text: 'cancelar',
          handler: () => {
            resolve(false);
          }
        },
        {
          text: 'aceptar',
          handler: () => {
            resolve(true);
          }
        }
      ]
  });
  confirmar.present();
 });
 return promesa

}
  ionViewCanLeave_antiguo(){
    console.log("ionViewCanLeave");
    //dejamos salir despues de 2 segundos
    let promesa=new Promise((resolv, reject)=> {
      setTimeout(() => {resolv(true);
      }, 2000);
    });
    return promesa;
    //sintaxis alternativa seria un return new promesa
  }
ionViewCanLeave(){
    console.log("ionViewCanLeave");
  let loading = this.loadingCtrl.create({ content:"Espere por favor" })
  loading.present();
  let promesa=new Promise((resolv, reject)=> {
    setTimeout(() => {resolv(true);
      loading.dismiss();
    }, 5000);
  });
  return promesa;

  }
  
  

  }
  