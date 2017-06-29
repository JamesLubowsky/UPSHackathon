import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from '../router/app.router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from '../components/app.component';
import { AddComponent } from '../components/add.component';
import { AboutComponent } from '../components/about.component';
import { HomeComponent } from '../components/home.component';
import { HeroComponent } from '../components/hero.component';

import { HeroService } from '../services/hero.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports:      [ HttpModule, BrowserModule, routes, FormsModule ],
  declarations: [ AppComponent, AboutComponent, HomeComponent, HeroComponent, AddComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [HeroService]
})
export class AppModule { }
