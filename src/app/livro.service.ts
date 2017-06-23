import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Livro } from './livro';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class LivroService {
    //json-server --watch livros.json -p 3002
    private apiLivros = 'http://localhost:3002/livros/';

    constructor(private http: Http) {}

    getLivros(): Observable<Livro[]> {
        return this.http.get(this.apiLivros)
            .map(this.extrairDados)
            .catch(this.handlerError);
    }

    private extrairDados(res: Response) {
        let body = <Livro[]> res.json();
        return body || { };
    }

    private handlerError(error: Response | any) {
        return Observable.throw(error.json().error || 'Erro no servidor');
    }
}