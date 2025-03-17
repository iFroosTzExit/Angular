import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EnviaNomeService {

    constructor() { }

    enviarNomesBackEnd(nomes: any) {
        console.log(nomes);
    }
}
