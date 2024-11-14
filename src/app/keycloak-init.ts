import { KeycloakService } from 'keycloak-angular';
import { KeycloakPropertiesService } from './keycloak-properties.service';

export function initializer(keycloak: KeycloakService, config: KeycloakPropertiesService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise<void>(async (resolve, reject) => {
      let environment;
      config.load().subscribe(async keycloakEnvironment => { 
          environment = keycloakEnvironment;
          try {
            await keycloak.init({
              config: environment,
              initOptions: {
                onLoad: 'login-required',
                checkLoginIframe: false
              },
              bearerExcludedUrls: []
            });
            resolve();
          } catch (error) {
            reject(error);
          }
      });
    });
  };
}
