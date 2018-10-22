import http from 'http';
import apiRouter from './api/api.router';
import Container from './core/container';

export default class Server {

  constructor(readonly container: Container) {
    this.container.app.use('/api', apiRouter(this.container));
  }

  public listen(): http.Server {
    const port = this.container.config.server.port;
    const hostname = this.container.config.server.hostname;
    return this.container.app.listen(port, hostname, () => {
      this.container.logger.info(`[init] Running app on ${hostname}:${port}`);
    });
  }
};
