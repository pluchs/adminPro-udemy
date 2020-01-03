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
          Titulo: "Gráficas",
          Url: "/graficas1"
        },
        {
          Titulo: "Progressbar",
          Url: "/progress"
        },
        {
          Titulo: "Promesas",
          Url: "/promesas"
        },
        {
          Titulo: "RxJs",
          Url: "/rxjs"
        }
      ]
    }
  ];

  constructor() {}
}
