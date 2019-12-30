import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';


@Component({
  selector: 'app-grafica-detalle',
  templateUrl: './grafica-detalle.component.html',
  styles: []
})
export class GraficaDetalleComponent implements OnInit {

  
  @Input() chartLabels: Label[];
  @Input() chartData: MultiDataSet;
  @Input() chartStyle: ChartType;
  @Input() chartTitle: string;

   doughnutChartLabels: Label[];
   doughnutChartData: MultiDataSet;
   doughnutChartType: ChartType;
   graphTitle: string;

  constructor() { }

  ngOnInit() {
    
    console.log(this.chartData);
    console.log(this.chartLabels);
    console.log(this.chartStyle);


    this.doughnutChartData = this.chartData;
    this.doughnutChartLabels = this.chartLabels;
    this.doughnutChartType = this.chartStyle;
    this.graphTitle = this.chartTitle;
  }

}
