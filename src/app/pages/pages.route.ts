import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { ProgressComponent } from "./progress/progress.component";
import { RouterModule, Routes } from "@angular/router";

const pagesRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "graficas1", component: Graficas1Component },
      { path: "progress", component: ProgressComponent },
      { path: "", pathMatch: "full", redirectTo: "/dashboard" }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
