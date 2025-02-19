import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

export const appConfig = {
  providers: [
    importProvidersFrom(
      HttpClientModule,  // Adicionando HttpClientModule aqui
      RouterModule.forRoot(routes)
    ),
  ],
};

