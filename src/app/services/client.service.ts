import { Injectable } from "@angular/core";


@Injectable()

export class ClientService{
    constructor() {

    }
    sayHello() {
        return "Olá pelo serviço"

    }

}