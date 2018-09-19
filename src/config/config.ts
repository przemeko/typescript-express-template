export interface ConfigInterface {
  appVersion: number,
  server: {
    port: number,
    hostname: string,
  }
}

export default {
  appVersion: 1,
  server: {
    port: 3000 || process.env.APP_SERVER_PORT,
    hostname: 'localhost' || process.env.APP_SERVER_HOSTNAME,
  }
}
