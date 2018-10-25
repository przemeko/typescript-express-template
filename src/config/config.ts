const config = {
  appVersion: 1,
  server: {
    port: 3000 || process.env.APP_SERVER_PORT,
    hostname: 'localhost' || process.env.APP_SERVER_HOSTNAME,
  },
  etherscan: {
    apiKey: '' || '' + process.env.APP_ETHERSCAN_API_KEY
  }
};

export type ConfigType = typeof config;
export default config;
