import { TestBed } from '@angular/core/testing';

import { KeycloakPropertiesService } from './keycloak-properties.service';

describe('KeycloakPropertiesService', () => {
  let service: KeycloakPropertiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeycloakPropertiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
