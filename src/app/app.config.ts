import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializer } from './keycloak-init';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakPropertiesService } from './keycloak-properties.service';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService, KeycloakPropertiesService],
    },
    KeycloakService,
    provideHttpClient()
  ]
};
