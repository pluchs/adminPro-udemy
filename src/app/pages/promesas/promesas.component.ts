import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {
  constructor() {
    



    this.contar3()
      .then(mensaje => {
        console.log('Termino', mensaje);
      })
      .catch( ( error: any) => {
        console.log('Error en la promesa', error);
      });
  }

  ngOnInit() {}

  contar3(){
    let promesa = new Promise((resolve, reject) => {
      let contador = 0;
      let interval = setInterval(() => {
        contador += 1;
        console.log(contador);

        if (contador === 3) {
          resolve('OK!');
          // reject('solo un error.....');
          clearInterval(interval);
        }
      }, 1000);
    });

    return promesa;
  }

}
