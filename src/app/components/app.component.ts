import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './hero.component';
import { HeroService } from '../services/hero.service';


@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/app.component.html',
  providers: [HeroService]
})
export class AppComponent  { 
  
 }
