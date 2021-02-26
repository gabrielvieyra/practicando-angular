import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { MenuNavegacionComponent } from './components/menu-navegacion/menu-navegacion.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HeaderComponent } from './components/main-page/header/header.component';
import { TablaComponent } from './components/main-page/tabla/tabla.component';
import { PaginacionComponent } from './components/main-page/paginacion/paginacion.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UsuarioComponent,
    MenuNavegacionComponent,
    MainPageComponent,
    HeaderComponent,
    TablaComponent,
    PaginacionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
