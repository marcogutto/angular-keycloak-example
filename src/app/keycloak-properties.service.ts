import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { KeycloakConfig } from './keycloak-config';

@Injectable({
  providedIn: 'root'
})
export class KeycloakPropertiesService {

  private readonly config = 'keycloak/keycloak.json';
  private configuration$: Observable<KeycloakConfig> | undefined;

  constructor(private _http: HttpClient) {
    
  }

  load(): Observable<KeycloakConfig> {
      if (!this.configuration$) {
        this.configuration$ = this._http.get<KeycloakConfig>(`${this.config}`).pipe(
          shareReplay(1)
        );
      }
      return this.configuration$;
  }
}