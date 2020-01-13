import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { UsuarioService } from "../services/service.index";
import { Usuario } from "../models/usuario.model";
import { subscribeOn } from "rxjs/operators";
import { element } from "protractor";
declare function init_plugins();

// Google
declare const gapi: any;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  recuerdame: boolean = false;
  email: string;
  auth2: any;

  constructor(public router: Router, public usuarioService: UsuarioService) {}

  ngOnInit() {
    init_plugins();
    this.googleInit();

    /************* Comments Start ****************************************************************/
    /* Description: Operador ||
                    Si no tiene valor, pon el valor default en las ''
    */
    /*********************************************************************************************/

    this.email = localStorage.getItem("email") || "";
    if (this.email !== "") {
      this.recuerdame = true;
    }
  }

  googleInit() {
    gapi.load("auth2", () => {
      this.auth2 = gapi.auth2.init({
        client_id:
          "49380877464-8cq4u9c01ai7d7lfrgtl9iis3penj559.apps.googleusercontent.com",
        cookiepolicy: "single_host_origin",
        scope: "profile email"
      });

      this.attachSigIn(document.getElementById("btnGoogle"));
    });
  }

  attachSigIn(element) {
    this.auth2.attachClickHandler(element, {}, googleUser => {
      // let profile = googleUser.getBasicProfile();
      let token = googleUser.getAuthResponse().id_token;
      // console.log(token);

      /************* Comments Start ****************************************************************/
      /* Description: Esta redireccion pr alguna razon no funciona bien en el dashboard, no carga completos los elementos
                      se redirecciona de manera manual por medio de JS
                      --- this.usuarioService.loginGoogle( token ).subscribe( resp => this.router.navigate(['/dashboard']) );

      */
      /*********************************************************************************************/

      this.usuarioService
        .loginGoogle(token)
        .subscribe(resp => (window.location.href = "#/dashboard"));
    });
  }

  ingresar(form: NgForm) {
    if (form.invalid) {
      return;
    }

    let usuario = new Usuario(
      null,
      form.value["email"],
      form.value["password"]
    );

    // console.log('Ingresando...');
    // this.router.navigate(['/dashboard']);

    console.log(this.recuerdame);
    console.log(form.value["recuerdame"]);

    this.usuarioService
      .login(usuario, this.recuerdame)
      .subscribe(resp => this.router.navigate(["/dashboard"]));
  }
}
