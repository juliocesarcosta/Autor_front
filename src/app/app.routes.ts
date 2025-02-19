import { Routes } from '@angular/router';
import { AutorComponent } from './autor/autor.component';

export const routes: Routes = [
    { path: 'autores', component: AutorComponent },
    { path: '', redirectTo: '/autores', pathMatch: 'full' }, // Rota padrão
];
