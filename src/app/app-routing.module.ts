import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
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

const routes: Routes = [
  { path: 'pruebas', component: PruebasComponent},
  { path: 'inicio', component: ContenidoInicialComponent },
  { path: 'pedidos', component: PedidosComponent},
  { path: 'catalogo', component: PizzasComponent},
  { path: 'tiendas', component: TiendasComponent},
  { path: 'inicio-sesion', component: IniciosesionComponent},
  { path: 'registro', component: RegistrarseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
