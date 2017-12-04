import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
export class Hero {
  id: number;
  name: string;
  
}

export const HEROES: Hero[] = [
  { id:11, name:"Mr. Nice" },
  { id: 12, name: "Narco" },
  { id: 13, name: "Bombasto" },
  { id: 14, name: "Celeritas" },
  { id: 15, name: "Magneta" },
  { id: 16, name: "RubberMan" },
  { id: 17, name: "Dynama" },
  { id: 18, name: "Dr IQ" },
  { id: 19, name: "Magma" },
  { id: 20, name: "Tornado" }
];

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
    
  styles: [
    `
  h1 {
    color:#607D8B;
    font-size:40px;
}
h2{
    color:#607D8B;
    font-size:40px;
}
 label{

    color:#607D8B;
    font-size:40px;

 }
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  `
  ],
  template: `<h1>{{title}}</h1>

  <h1>============================================</h1>
  <h2>My Heros Goes Here:</h2>
  <ul class="heroes">
  <li *ngFor="let hero of heroes" 
  [class.selected]="hero===selectedHero"
  (click)="onSelect(hero)">
  <span class='badge'>{{hero.id}}</span>  {{hero.name}}
  </li>
  </ul>      
  <h2>============================================</h2>
  <div>

  <div  *ngIf="selectedHero">
  <div>
  <span><label>id: </label>{{selectedHero.id}}</span>
  </div>
 
  
  <div>
  <label>name: </label>
  <input class="input" [(ngModel)]="selectedHero.name" placeholder="name" />
  </div>
  </div>


  <br><br><br><br>
  `
})
export class AppComponent {
  title = "Tour of Heroes"; //应用的名字
   heroes = HEROES; // 让HEROS暴露               //
  selectedHero: Hero;//  the hero selected ==>  
  onSelect(hero:Hero): void {
    this.selectedHero = hero;
  }
}


