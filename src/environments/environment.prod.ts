import { Environment } from '@delon/theme';

export const environment = {
  production: true,
  useHash: true,
  api: {
    baseUrl: './',
    refreshTokenEnabled: true,
    refreshTokenType: 'auth-refresh',
    serverUrl: 'http://153.121.71.37/',
    apiUrl: 'http://153.121.71.37/api/'
  }
} as Environment;
