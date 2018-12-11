import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import{Storage} from '@ionic/storage';


@Injectable()
export class AjustesProvider {
  // creamos una propiedad
  listaAjustes={
    mostrar_tutorial: true
  }
//inyectamos storage y plataform
  constructor(private plataforma: Platform, private storage:Storage) {
  }
//crear el almacenamiento
cargar_storage(){
  /* if(this.plataforma.is("cordova")){//estamos en el movil

  }
  else{//estamos en el navegador
     //localStorage viene en html5 y soportado por navegadores modernos
    if(localStorage.getItem("ajustes")){
      this.listaAjustes=JSON.parse(localStorage.getItem("ajustes")); //pasamos string a JSON
     //JSON.parse(localStorage.getItem("ajustes") pasa de string a JSON
  }
  }
  //reformular todo como una promesa*/
  let promesa = new Promise ((resolv, reject) =>{
    if (this.plataforma.is("cordova")){ //estamos en el móvil
      this.storage.ready()
        .then( () =>{
          this.storage.get("ajustes")
            .then (a =>{
              if (a){
              this.listaAjustes = a;
              }
              resolv();
            }
            )
        }
        )
      } else { //estamos en el navegador
        //localStorage viene en html5 y soportado por navegadores modernos
        if( localStorage.getItem("ajustes")){
          this.listaAjustes = JSON.parse(localStorage.getItem("ajustes")); //pasamos string a JSON JSON.parse(localStorage.getItem("ajustes") pasa de string a JSON*/
        }
        resolv();
    }
           
  });
  return promesa;
}
//creamos el metodo que guarda un valor en el movil o navegador
guardar_storage(){
  if(this.plataforma.is("cordova")){//estamos en el movil
this.storage.ready()
.then(()=>{this.storage.set("ajustes", this.listaAjustes)})
  }
  else{//estamos en el navegador
    localStorage.setItem("ajustes",JSON.stringify(this.listaAjustes));
    //aplanamos el JSON Transforma JASON a cadena
    //JSON.stringify(this.listaAjustes) pasa de json a cadena  
    }
  }

}

