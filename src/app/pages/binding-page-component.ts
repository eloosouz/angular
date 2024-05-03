
import { Component } from "@angular/core";

@Component(
    {
    selector: "app-binding",
    template: `
        <h1>Imagem do Angular</h1>
        <img [src]="imagem" [style]="{width: width, height: height}" />
        <div class="alert" [class]="sucesso" [style.background-color]="backgroundcolor"> 
            Alerta

        </div>
        <button (click)="enviarDados()">Enviar dados</button>
         `,
         styles: [
            `.alert {
                width:200px;
                height:100px;
                border: 1px solid blue

            }
            .sucess {
                border: 5px solid green;
            }
            `
        ]
    }
)
export class BindingPageComponent {
    width = "150px"
    height= "200px"
    imagem = "https://imgs.search.brave.com/dypTLVYvvTZUZ89czrAaAgmwEs-uIyyoaIyOF0_moco/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NmL0FuZ3VsYXJf/ZnVsbF9jb2xvcl9s/b2dvLnN2Zw.svg" 
    backgroundcolor= "blue" 
    sucesso = "outra classe"

    enviarDados(){
       //  this.sucesso = !this.sucesso
       this.backgroundcolor = "red"
    }
}