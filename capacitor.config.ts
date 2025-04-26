
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.smarterpartner.app',
  appName: 'SmartERPartner',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: 'https://61a218cf-ef8d-4834-abb3-df440bbb3d11.lovableproject.com?forceHideBadge=true',
    cleartext: true
  }
};

export default config;
