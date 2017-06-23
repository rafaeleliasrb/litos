import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';

import { AcervoComponent } from './app/acervo/acervo.component';
import { AppComponent } from './app/app.component';
import { LivroDataService } from './app/livro-data.service';
import { LivroService } from './app/livro.service';
import { SobrePageComponent } from './app/sobre/sobre-page.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'livros', pathMatch: 'full'},
    {path: 'livros', component: AcervoComponent},
    {path: 'sobre-page', component: SobrePageComponent}
];

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ AppComponent, AcervoComponent, SobrePageComponent ],
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    providers: [ LivroDataService, LivroService ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);