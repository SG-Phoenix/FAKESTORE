
 import { KeycloakConfig } from 'keycloak-js';

 const keycloakConfig: KeycloakConfig = {
   url: 'http://127.0.0.1:8080/auth',
   realm: 'fakeestore',
   clientId: 'fakeestore-backend',
 };

 export default keycloakConfig;
