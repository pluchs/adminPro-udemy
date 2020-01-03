import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  
  subcription: Subscription;
  
  constructor() {
    this.subcription =  this.regresaObservable() /*.pipe( retry(2) )*/
      .subscribe(
        contador => console.log('Subs', contador),
        error => console.log('Error en el obs', error),
        () => console.log('El observador termino!!')
      );
  }

  ngOnInit() {}

  ngOnDestroy(){
    console.log('la pagina se va a cerrar');
    this.subcription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;

      let interval = setInterval(() => {
        contador += 1;

        const salida = {
          valor: contador
        };

        observer.next(salida);

        // if (contador === 3) {
        //   observer.complete();
        // }

        // Para manejo de errores
        // if (contador === 2) {
        //   // Opcion pára generar un error demostrativo
        //   //clearInterval(interval);
        //   /************************************** */
        //   observer.error('Help!!!!!!!');
        // }
      }, 1000);
    }).pipe(
      map(resp => resp.valor),
      filter((valor, index) => {
        // console.log('Filter', valor, index);
        if ( (valor % 2 === 1) ) {
          // impar
          return true;
        } else {
          // par
          return false;
        }
        // return true;
      })
    );
    // return obs;
  }
}
