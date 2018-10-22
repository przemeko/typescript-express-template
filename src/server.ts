import http from 'http';
import apiRouter from './api/api.router';
import cors from 'cors';
import helmet from 'helmet';
import customHeader from './middleware/custom-header.middleware';
import { Application } from 'express';
import Container from './core/container';
import { ConfigType } from './config/config';

export default class Server {
  private config: ConfigType;
  private app: Application;

  constructor(readonly container: Container) {
    this.config = this.container.config;
    this.app = this.container.app;

    this.setupMiddleware();
    this.setupRoutes();
  }

  private setupMiddleware() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(customHeader('Version', this.config.appVersion.toString()));
  }

  private setupRoutes() {
    this.app.use('/api', apiRouter(this.container));
  }

  public getContainer(): Container {
    return this.container;
  }

  public listen(): http.Server {
    const { port, hostname } = this.config.server;
    return this.app.listen(port, hostname, () => {
      this.container.logger.info(`[init] Running app on ${hostname}:${port}`);
    });
  }
};
