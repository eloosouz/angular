import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
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
    LoginPageComponent
    
  ],

  imports: [
    BrowserModule,
    ComponentModule,
    AppRoutingModule,
    FormsModule,
     
    
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
