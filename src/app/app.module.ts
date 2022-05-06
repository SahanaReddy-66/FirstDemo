import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderoneComponent } from './headerone/headerone.component';
import { IntroComponent } from './intro/intro.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoopingComponent } from './looping/looping.component';
import {FormsModule} from '@angular/forms';
import { WorkComponent } from './work/work.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderoneComponent,
    IntroComponent,
    RegisterComponent,
    ContactComponent,
    FooterComponent,
    LoopingComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
