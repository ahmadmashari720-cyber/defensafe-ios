import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.defensafe.system',
  appName: 'DefenSafe',
  webDir: 'public',
  server: {
    url: 'https://system.defensafe.com/',
    cleartext: true,
    allowNavigation: [
      'system.defensafe.com',
      '*.defensafe.com'
    ]
  },
  ios: {
    allowsLinkPreview: false,
    scrollEnabled: true,
    contentInset: 'always'
  }
};

export default config;