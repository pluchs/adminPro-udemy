import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesComponent } from "./pages.component";
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.route';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { ChartsModule } from 'ng2-charts';
import { GraficaDetalleComponent } from '../components/grafica-detalle/grafica-detalle.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


@NgModule({
  declarations: [
    Graficas1Component,
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
    IncrementadorComponent,
    GraficaDetalleComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent
  ],
  imports: [
      CommonModule,
        // Se importa desde el archivo shared.module.ts
      SharedModule,
      PAGES_ROUTES,
      FormsModule,
      ChartsModule
],
  exports: [Graficas1Component, DashboardComponent, ProgressComponent],
  providers: []
})
export class PagesModule {}
