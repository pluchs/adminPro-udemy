import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import sweetAlert from 'sweetalert';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario: Usuario;
  token: string;

  constructor(public http: HttpClient,
              public router: Router) {
    //console.log('Servicio de usuario listo');
    this.cargarStorage();
  }

  logout(){
    this.token = '';
    this.usuario = null;

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    //localStorage.removeItem('id');
    this.router.navigate(['/login']);
    
  }


  estaLogueado(){
    return (this.token.length > 5 ? true : false);
  }

  cargarStorage(){
    if (localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }
    else{
      this.usuario = null;
      this.token = '';
    }
  }

  crearUsuario(usuario: Usuario) {
    let url = URL_SERVICIOS + '/usuario';

    /************* Comments Start ****************************************************************/
    /* Description: Este ejercicio de hizo de manera diferente, se agrego el pipe antes del map
                     y se tuvo que agregar la referencia al SweetAlert
     */
    /*********************************************************************************************/

    return this.http.post(url, usuario).pipe(
      map((resp: any) => {
        sweetAlert('Usuario Creado', usuario.email, 'success');
        return resp.usuario;
      })
    );
  }

  guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;
  }

  loginGoogle(token: string) {
    let url = URL_SERVICIOS + '/login/google';

    return this.http.post(url, { token }).pipe(
      map((resp: any) => {
        this.guardarStorage(resp.id, resp.token, resp.usuario);
      })
    );
  }

  login(usuario: Usuario, recordar: boolean = false) {
    if (recordar) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }

    let url = URL_SERVICIOS + '/login';

    return this.http.post(url, usuario).pipe(
      map((resp: any) => {
        /************* Comments Start ****************************************************************/
        /* Description: Se quita de aqui, y se pasa a una funcion
         */
        /*********************************************************************************************/
        // localStorage.setItem('id', resp.id);
        // localStorage.setItem('token', resp.token);
        // localStorage.setItem('usuario', JSON.stringify(resp.usuario));
        this.guardarStorage(resp.id, resp.token, resp.usuario);

        return true;
      })
    );
  }
}
