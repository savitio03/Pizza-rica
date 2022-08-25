import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { BarTopComponent } from './components/bar-top/bar-top.component';
import { BarButtomComponent } from './components/bar-buttom/bar-buttom.component';
import { ContenidoInicialComponent } from './components/contenido-inicial/contenido-inicial.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { IniciosesionComponent } from './components/iniciosesion/iniciosesion.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { TiendasComponent } from './components/tiendas/tiendas.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';

@NgModule({
  declarations: [
    AppComponent,
    BarTopComponent,
    BarButtomComponent,
    ContenidoInicialComponent,
    PedidosComponent,
    PizzasComponent,
    IniciosesionComponent,
    RegistrarseComponent,
    TiendasComponent,
    PruebasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
