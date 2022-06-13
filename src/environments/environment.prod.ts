import { Environment } from '@delon/theme';

export const environment = {
  production: true,
  useHash: true,
  api: {
    baseUrl: './',
    refreshTokenEnabled: true,
    refreshTokenType: 'auth-refresh',
    serverUrl: 'https://orderbot.jp/',
    apiUrl: 'https://orderbot.jp/api/'
  }
} as Environment;
