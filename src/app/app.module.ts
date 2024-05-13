import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from './components/components.module';
import { FormsModule } from '@angular/forms';
import { ClientListPage } from './pages/client-list-page.component';
import { BindingPageComponent } from './pages/binding-page-component';
import { CustomUpperCasePipe } from './pipe/custom-uppercase-pipe';
import { ClientService } from './services/client.service';
import { Filho1PageComponent } from './pages/filho1-page.component';
import { Filho2PageComponent } from './pages/filho2-page.component';
import { PaiPageComponent } from './pages/pai.component';
import { LoginPageComponent } from './pages/login-page.component';
import { ClienteDetalhePageComponent } from './pages/client-detalhe-page.component';
import { RXJSPageComponent } from './pages/rxjs-page.component';
import { Router } from '@angular/router';
import { ListaPessoasPage } from './pages/lista-pessoas-page.component';
import { HttpClientModule } from '@angular/common/http';
import { UserPageComponent } from './pages/user-page.component';




@NgModule({
  declarations: [
    AppComponent,
    ClientListPage,
    BindingPageComponent,
    CustomUpperCasePipe,
    PaiPageComponent,
    Filho1PageComponent,
    Filho2PageComponent,
    ClientListPage,
    LoginPageComponent,
    ClienteDetalhePageComponent,
    RXJSPageComponent,
    ListaPessoasPage,
    UserPageComponent
   
    
  ],

  imports: [
    BrowserModule,
    ComponentModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    
    
     
    
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
