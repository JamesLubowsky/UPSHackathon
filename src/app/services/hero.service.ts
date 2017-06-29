import { Injectable } from '@angular/core';
import { HeroComponent } from '../components/hero.component';
import { HEROES } from '../data/hero.data';

@Injectable ()

export class HeroService {
    _heroes: Array<HeroComponent> = HEROES;
    _index: number = 6

    constructor() {
        this.sortByAlpha();
    }
    
    getHeroes(): Array<HeroComponent> {
        return this._heroes;
    }

    newHero(h: HeroComponent) : void {
        this._heroes.push(h);
    }
    getIndex(): number {
        return this._index;
    }

    incremenetIndex(): void {
        this._index++;
    }

    sortByAlpha(): void {
        let newName = this._heroes[(0)];
        for(let i = this._heroes.length-1; i >0; i--)  {
            let positionOfMax = 0;
            for(let j = 1;j < i+1; j++) {
                if(this._heroes[j].name.toString().localeCompare(this._heroes[positionOfMax].name.toString()) > 0) {
                    positionOfMax = j;
                }
            }
            let temp = this._heroes[i];
            this._heroes[i] = this._heroes[positionOfMax];
            this._heroes[positionOfMax] = temp;
        }
    }

    sortByNum(): void {
        let newName = this._heroes[(0)];
        for(let i = this._heroes.length-1; i >0; i--)  {
            let positionOfMax = 0;
            for(let j = 1;j < i+1; j++) {
                if(this._heroes[j].id > this._heroes[positionOfMax].id) {
                    positionOfMax = j;
                }
            }
            let temp = this._heroes[i];
            this._heroes[i] = this._heroes[positionOfMax];
            this._heroes[positionOfMax] = temp;
        }
    }


}