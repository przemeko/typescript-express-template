import http from 'http';
import expressModule from 'express';
import { ConfigType } from './config/config';
import winston from 'winston';
import path from 'path';

export default class App {

  readonly _config: ConfigType;
  private _express: expressModule.Application;
  private _logger: winston.Logger;

  constructor(config: ConfigType) {
    this._express = expressModule();
    this._config = config;
    this._logger = this.createLogger();

    this.init();
  }

  private init(): void {

  }

  private createLogger(): winston.Logger {
    const myFormat = winston.format.printf(info => {
      return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
    });

    const logPath = path.join(__dirname, './../logs');
    return winston.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.label({ label: 'app' }),
        winston.format.timestamp(),
        myFormat
      ),
      transports: [
        new winston.transports.File({
          filename: path.join(logPath, 'combined.log')
        }),
        new winston.transports.Console()
      ]
    });
  }

  public listen(): http.Server {
    const port = this._config.server.port;
    const hostname = this._config.server.hostname;
    return this._express.listen(port, hostname, () => {
      this.logger.info(`[init] Running app on ${hostname}:${port}`);
    });
  }

  get config(): ConfigType {
    return this._config;
  }

  get express(): expressModule.Application {
    return this._express;
  }

  get logger(): winston.Logger {
    return this._logger;
  }
}
