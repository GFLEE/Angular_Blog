import { Component, Input } from "@angular/core";
import { Hero } from "./hero";

@Component({
 
  selector: "hero-detail",
  template: `
    
      
      <div  *ngIf="hero">
      
        <div>
        <span><label>id: </label>{{hero.id}}</span>
        </div>
        <h2>{{hero.name }} Details:</h2>
        <div>
        <label>name: </label>
        <input class="input" [(ngModel)]="hero.name" placeholder="name" />
        </div>
        </div>
    `
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}
