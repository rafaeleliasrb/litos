"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require("rxjs/Observable");
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var LivroService = (function () {
    function LivroService(http) {
        this.http = http;
        //json-server --watch livros.json -p 3002
        this.apiLivros = 'http://localhost:3002/livros/';
    }
    LivroService.prototype.getLivros = function () {
        return this.http.get(this.apiLivros)
            .map(this.extrairDados)
            .catch(this.handlerError);
    };
    LivroService.prototype.extrairDados = function (res) {
        var body = res.json();
        return body || {};
    };
    LivroService.prototype.handlerError = function (error) {
        return Observable_1.Observable.throw(error.json().error || 'Erro no servidor');
    };
    LivroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LivroService);
    return LivroService;
}());
exports.LivroService = LivroService;
//# sourceMappingURL=livro.service.js.map