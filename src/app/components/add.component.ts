import { Component } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { HeroComponent } from './hero.component';

@Component ({
    selector: 'addElement',
    template: `::before
    <h1>Add</h1>
    <p>ID: {{index}}</p>
    <input [(ngModel)] = "myValue" placeholder="hero name" (keyup.enter) = "increment()" >  
    `
})

export class AddComponent {
    index: number;
    myValue: string;


    constructor(private _h:HeroService) {
    }



    ngOnInit(): void {
        this.index = this._h.getIndex();
        this.myValue = null
    }

    increment(): void {
        this._h.newHero({id: this.index, name: this.myValue});
        this._h.incremenetIndex();
        this.index = this._h.getIndex();
        this.myValue = null;
    }

}