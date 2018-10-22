const config = {
  appVersion: 1,
  server: {
    port: 3000 || process.env.APP_SERVER_PORT,
    hostname: 'localhost' || process.env.APP_SERVER_HOSTNAME,
  }
};

export type ConfigType = typeof config;
export default config;
