import { HamburgerComponent } from './component/hamburger/hamburger.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { StartComponent } from './component/home/start/start.component';
import { AboutUsComponent } from './component/home/about-us/about-us.component';
import { WhatWeDoForYouComponent } from './component/home/what-we-do-for-you/what-we-do-for-you.component';
import { ToolsComponent } from './component/home/tools/tools.component';
import { DishesComponent } from './component/home/dishes/dishes.component';
import { CustomersComponent } from './component/home/customers/customers.component';
import { ChefComponent } from './component/home/chef/chef.component';
import { MomentsComponent } from './component/home/moments/moments.component';
import { GalleryComponent } from './component/home/gallery/gallery.component';
import { TestifyComponent } from './component/home/testify/testify.component';
import { AcademyComponent } from './component/home/academy/academy.component';
import { BlogComponent } from './component/home/blog/blog.component';
import { ContactComponent } from './component/home/contact/contact.component';
import { FooterComponent } from './component/home/footer/footer.component';
import { AperitivoComponent } from './component/home/dishes/aperitivo/aperitivo.component';
import { PlatosFuertesComponent } from './component/home/dishes/platos-fuertes/platos-fuertes.component';
import { PlatosEspecialesComponent } from './component/home/dishes/platos-especiales/platos-especiales.component';
import { AdicionesComponent } from './component/home/dishes/adiciones/adiciones.component';
import { PostresComponent } from './component/home/dishes/postres/postres.component';
import { ClientsComponent } from './component/home/clients/clients.component';
import { InmobiliarioComponent } from './component/home/clients/inmobiliario/inmobiliario.component';
import { EducacionComponent } from './component/home/clients/educacion/educacion.component';
import { AutomotrizComponent } from './component/home/clients/automotriz/automotriz.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StartComponent,
    AboutUsComponent,
    WhatWeDoForYouComponent,
    ToolsComponent,
    DishesComponent,
    CustomersComponent,
    ChefComponent,
    MomentsComponent,
    GalleryComponent,
    TestifyComponent,
    AcademyComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
    HamburgerComponent,
    AperitivoComponent,
    PlatosFuertesComponent,
    PlatosEspecialesComponent,
    AdicionesComponent,
    PostresComponent,
    ClientsComponent,
    InmobiliarioComponent,
    EducacionComponent,
    AutomotrizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
