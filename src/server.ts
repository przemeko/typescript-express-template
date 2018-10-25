import http from 'http';
import apiRouter from './api/api.router';
import cors from 'cors';
import helmet from 'helmet';
import customHeader from './middleware/custom-header.middleware';
import logEveryRequest from './middleware/log-every-request.middleware';
import { Application } from 'express';
import Container from './core/container';
import { ConfigType } from './config/config';
import { Logger } from 'winston';

export default class Server {
  private config: ConfigType;
  private app: Application;
  private logger: Logger;

  constructor(readonly container: Container) {
    this.config = this.container.config;
    this.app = this.container.app;
    this.logger = this.container.logger;

    this.setupMiddleware();
    this.setupRoutes();
  }

  private setupMiddleware() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(customHeader('Version', this.config.appVersion.toString()));
    this.app.use(logEveryRequest(this.logger));
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
      this.logger.info(`[init] Running app on ${hostname}:${port}`);
    });
  }
};
