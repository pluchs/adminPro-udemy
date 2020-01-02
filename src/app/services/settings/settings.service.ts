import { Injectable, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Injectable({
  providedIn: "root"
})
export class SettingsService {
  TEMA_URL: string = "assets/css/colors/default-dark.css";
  TEMA: string = "default.css";

  ajustes: Ajustes = {
    temaUrl: this.TEMA_URL,
    tema: this.TEMA
  };
  // document: any;
  // ajustesService: any;

  constructor(@Inject(DOCUMENT) private _document) {}

  guardarAjustes() {
    localStorage.setItem("Ajustes", JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    if (localStorage.getItem("Ajustes")) {
      console.log("personalizado");

      this.ajustes = JSON.parse(localStorage.getItem("Ajustes"));
      console.log(this.ajustes);
    } else {
      this.ajustes.temaUrl = this.TEMA_URL;
      this.ajustes.tema = this.TEMA;
      console.log("default");
      console.log(this.ajustes);
    }
    // this.aplicarCheck()
    this.aplicarTema(this.ajustes.tema);
  }

  aplicarTema(color: string, link?: any) {
    this.ajustes.temaUrl = `assets/css/colors/${color}.css`;
    this.ajustes.tema = color;
    console.log(this.ajustes.temaUrl);

    this._document
      .getElementById("appTheme")
      .setAttribute("href", this.ajustes.temaUrl);
    // console.log(this.ajustes);
    // this._ajustesService.ajustes.tema = color;
    // this._ajustesService.ajustes.temaUrl = url;

    // this.aplicarCheck(link);
    this.guardarAjustes();
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
