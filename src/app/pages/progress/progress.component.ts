import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  styles: []
})
export class ProgressComponent implements OnInit {
  porcentaje: number = 20;
  porcentaje1: number = 90;

  constructor() {}

  ngOnInit() {}

  actualizarProgreso(evento: number){
    console.log(evento);
    this.porcentaje = evento;
  }
}
