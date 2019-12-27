import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesComponent } from "./pages.component";
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.route';

@NgModule({
  declarations: [
    Graficas1Component,
    DashboardComponent,
    ProgressComponent,
    PagesComponent
  ],
  imports: [
      CommonModule,
        // Se importa desde el archivo shared.module.ts
      SharedModule,
      PAGES_ROUTES
],
  exports: [Graficas1Component, DashboardComponent, ProgressComponent],
  providers: []
})
export class PagesModule {}
