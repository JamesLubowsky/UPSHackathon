import { Component } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { HeroComponent } from './hero.component';

@Component ({
    selector: 'home',
    templateUrl:'app/templates/main.component.html',
    styleUrls: ['app/templates/overall.component.css']
})

export class HomeComponent {
    heroes: Array<HeroComponent>;
    display: boolean = false;
    ind: number;
    topOn: boolean = true;
    dashOn: boolean = false;

    constructor(private _h: HeroService) {

     }

    getHeroes(): void {
      this.heroes = this._h.getHeroes();
    }

    ngOnInit(): void {
      this._h.sortByAlpha();
      this.getHeroes();
    }

    setIndex(ind: number): void {
        this.display = true;
        this.ind = ind;
    }

    top(): void {
        this.topOn = true;
        this.dashOn = false;
        this._h.sortByAlpha();
        this.heroes = this._h.getHeroes();
    }

    dash(): void {
        this.topOn = false;
        this.display = false;
        this.dashOn = true;
        this._h.sortByNum();
        this.heroes = this._h.getHeroes();
        
    }

    
}