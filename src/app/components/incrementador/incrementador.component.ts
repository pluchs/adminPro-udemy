import {
  Component,
  OnInit,
  NgModule,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-incrementador",
  templateUrl: "./incrementador.component.html",
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild("txtPorcentaje", { static: false }) txtPorcentaje: ElementRef;

  @Input() porcentaje: number = 20;
  @Input("Nombre") titulo: string = "Leyenda";

  @Output() cambiaValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Leyenda', this.titulo);
    // console.log('progreso', this.porcentaje);
  }

  ngOnInit() {
    console.log("Leyenda", this.titulo);
    console.log("progreso", this.porcentaje);
  }

  cambiarvalor(valor: number) {
    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }

    this.porcentaje += valor;

    this.cambiaValor.emit(this.porcentaje);
    this.txtPorcentaje.nativeElement.focus();
  }

  onChange(newValue: number) {
    //let elemHTML: any =  document.getElementsByName('porcentaje')[0];

    //console.log(elemHTML.value);

    //console.log(this.txtPorcentaje);

    if (newValue >= 100) {
      this.porcentaje = 100;
    } else if (newValue <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }

    //elemHTML.value = Number(this.porcentaje);
    this.txtPorcentaje.nativeElement.value = this.porcentaje;
    console.log(this.porcentaje);
    this.cambiaValor.emit(this.porcentaje);
  }
}
