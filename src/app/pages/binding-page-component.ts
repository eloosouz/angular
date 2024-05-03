
import { Component } from "@angular/core";

@Component ({
    selector: "app-binding",
    template: `
    <h1>Imagem do Angular</h1>
    <img [src]="imagem" [style]="{width: width}">
    `
    
})
export class BindingPageComponent {
    width = "300px"
    imagem = "https://imgs.search.brave.com/dypTLVYvvTZUZ89czrAaAgmwEs-uIyyoaIyOF0_moco/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NmL0FuZ3VsYXJf/ZnVsbF9jb2xvcl9s/b2dvLnN2Zw.svg"
}