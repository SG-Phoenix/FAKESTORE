
 import { KeycloakConfig } from 'keycloak-js';

 const keycloakConfig: KeycloakConfig = {
   url: 'http://localhost:8080/auth',
   realm: 'fakeestore',
   clientId: 'fakeestore-backend',
 };

 export default keycloakConfig;
