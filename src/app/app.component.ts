import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-primeira-aula';
  descricao1 = 'Descricao';

  clientePremium = false

  nome = "elo souza"

 
  valores = [{
    descricao: 'teste',
    nome: 'nome',
    id: 1 
    },{
      descricao: 'descricao 2',
      nome: 'nome 2',
      id: 2
    
  }]

  umadata = new Date ()

  umDinheiro = 10.5

  adicionar() {
    this.valores.push({descricao: 'adicionado', nome: this.nome, id: 3 })
  }
}

