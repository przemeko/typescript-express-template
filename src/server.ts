import http from 'http';
import apiRouter from './api/api.router';
import Container from './core/container';
import cors from 'cors';
import helmet from 'helmet';

export default class Server {

  constructor(readonly container: Container) {
    this.setupMiddleware();
    this.container.app.use('/api', apiRouter(this.container));
  }

  private setupMiddleware() {
    this.container.app.use(cors());
    this.container.app.use(helmet());
  }

  public listen(): http.Server {
    const port = this.container.config.server.port;
    const hostname = this.container.config.server.hostname;
    return this.container.app.listen(port, hostname, () => {
      this.container.logger.info(`[init] Running app on ${hostname}:${port}`);
    });
  }
};
