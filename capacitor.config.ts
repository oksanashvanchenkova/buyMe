import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'buyMe',
  webDir: 'www',
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '1094302961148-8vqebc8n688s4gop3kbgvh7e2gdgkcbd.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
