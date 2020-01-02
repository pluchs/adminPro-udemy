import { Component } from '@angular/core';
import { SettingsService, SidebarService, SharedService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public _ajustesServices: SettingsService ){
    this._ajustesServices.cargarAjustes();
  }
}
