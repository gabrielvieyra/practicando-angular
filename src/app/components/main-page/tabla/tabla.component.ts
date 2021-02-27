import { Component } from '@angular/core';
import { MainPageService } from '../services/main-page.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: [
  ]
})
export class TablaComponent {
  constructor(private mainPageService: MainPageService) {}

  iniciarApp() {
    this.mainPageService.obtenerInformacion();
  }
}
