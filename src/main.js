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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require("@angular/http");
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_1 = require('@angular/router');
var acervo_component_1 = require('./app/acervo/acervo.component');
var app_component_1 = require('./app/app.component');
var livro_data_service_1 = require('./app/livro/livro-data.service');
var livro_service_1 = require('./app/livro/livro.service');
var sobre_page_component_1 = require('./app/sobre/sobre-page.component');
var livro_component_1 = require("./app/livro/livro.component");
var appRoutes = [
    { path: '', redirectTo: 'livros', pathMatch: 'full' },
    { path: 'livros', component: acervo_component_1.AcervoComponent },
    { path: 'sobre-page', component: sobre_page_component_1.SobrePageComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            declarations: [app_component_1.AppComponent, acervo_component_1.AcervoComponent, sobre_page_component_1.SobrePageComponent, livro_component_1.LivroComponent],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
            providers: [livro_data_service_1.LivroDataService, livro_service_1.LivroService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map