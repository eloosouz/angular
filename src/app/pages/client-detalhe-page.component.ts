import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-client-detalhe',
    template: `
    <h1>Detalhe do cliente</h1>
    <p>ID: {{client.id}} </p>
    <p>{{client.nome}}</p>
    <p>{{client.descricao}}</p>
    `
})

export class ClienteDetalhePageComponent implements OnInit {
    client = {id: "0", nome: "", descricao: ""}

    constructor(private activeRouter: ActivatedRoute) {}

    ngOnInit(): void {
        const id = this.activeRouter.snapshot.paramMap.get("id")
        if(id) {
            this.client = {nome: "Client 1", descricao: "descrição do cliente 1", id:id}
        }
    }

}