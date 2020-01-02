import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { SettingsService } from '../../services/service.index';

@Component({
  selector: "app-account-settings",
  templateUrl: "./account-settings.component.html",
  styles: []
})
export class AccountSettingsComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private _document,
    public _ajustesService: SettingsService
  ) {}

  ngOnInit() {
    this.colocarCheck();

  }

  cambiarColor(color: string, link: any) {
    //console.log(color);
    // console.log(link);

    //this._ajustesService.aplicarCheck(link);
    this.aplicarCheck(link);
    this._ajustesService.aplicarTema(color, link);

    // let url = `assets/css/colors/${color}.css`;
    // this._document.getElementById("appTheme").setAttribute("href", url);
    // this._ajustesService.ajustes.tema = color;
    // this._ajustesService.ajustes.temaUrl = url;

    // this._ajustesService.guardarAjustes();
  }

  aplicarCheck( link: any){  
    let selectores: any = document.getElementsByClassName('selector');  
    
    for (let ref of selectores){
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocarCheck(){  
    let selectores: any = document.getElementsByClassName('selector');  
    let tema = this._ajustesService.ajustes.tema;

    for (let ref of selectores){
      if (ref. getAttribute('data-theme') === tema){
        ref.classList.add('working');
        break;
      }
    }
  }
}
