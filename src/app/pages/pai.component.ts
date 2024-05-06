import { Component } from "@angular/core";

@Component({
    selector: 'app-pai',
    template: `
    <h1>No component pai</h1>
    <a [routerLink]="['filho1']"> Ir para filho 1 </a> <br>
    <a [routerLink]="['filho2']"> Ir para filho 2 </a>
    <router-outlet></router-outlet>
    `
})

export class PaiPageComponent {

}