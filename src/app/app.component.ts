import { AjustesProvider } from './../providers/ajustes/ajustes';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = HomePage;
  //mostrar temporalmente la pagina introduccion
  //rootPage:any = IntroduccionPage;
//dejar el rootpage sin definir
rootPage:any;
  constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private ajustesProvider:AjustesProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //cargar introduccion o home en funcion de lo qye tenga en memoria del movil o del navegador
      //acordarse de inyectar AjustesProvider
    /*  this.ajustesProvider.cargar_storage();
      if(this.ajustesProvider.listaAjustes.mostrar_tutorial){
        this.rootPage = "introPage";
      }
      else{
        this.rootPage= HomePage;
      }*/
      // hacemos lo mismo pero suscribiendo con un then a cargar_storage()
      this.ajustesProvider.cargar_storage()
      .then(
        ()=>{
          if(this.ajustesProvider.listaAjustes.mostrar_tutorial){
          this.rootPage = "introPage";
        }
        else{
          this.rootPage = HomePage;
        }
        }
      )
      statusBar.styleDefault();
      splashScreen.hide();
      //operaciones de pausa y resume
      this.platform.pause.subscribe(()=>{
        console.log("la app se va a pausar")
      }) ;
      this.platform.resume.subscribe(()=>{
      console.log("la app se va a reanudar")
    })
    });
   
  }
}

