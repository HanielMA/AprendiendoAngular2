import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';

@Injectable()
export class ListaDeseosService {

    listas: Lista[]=[];
    constructor() {
        console.log("Servicio Inicializado");

        let lista1 = new Lista('Compra de supermercado');
        let lista2 = new Lista('Juegos deseados');
        let lista3 = new Lista('Cosas de la universidad.');

        this.listas.push(lista1);
        this.listas.push(lista2);
        this.listas.push(lista3);
     }
}