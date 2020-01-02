import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SidebarService {
  Menu: any = [
    {
      Titulo: "Principal",
      Icono: "mdi mdi-gauge",
      Submenu: [
        {
          Titulo: "Dashboard",
          Url: "/dashboard"
        },
        {
          Titulo: "Progressbar",
          Url: "/progress"
        },
        {
          Titulo: "Gráficas",
          Url: "/graficas1"
        }
      ]
    }
  ];

  constructor() {}
}
