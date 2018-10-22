import { ConfigType } from '../config/config';
import { Logger } from 'winston';
import { Application } from 'express';

export default class Container {
  private services = <any>[];

  set(key: string, service: any) {
    this.services[ key ] = service;
  }

  get(key: string): any {
    return this.services[ key ];
  }

  set app(app: Application) {
    this.services[ 'app' ] = app;
  }

  get app(): Application {
    return this.services[ 'app' ];
  }

  set config(config: ConfigType) {
    this.services[ 'config' ] = config;
  }

  get config(): ConfigType {
    return this.services[ 'config' ];
  }

  set logger(logger: Logger) {
    this.services[ 'logger' ] = logger;
  }

  get logger(): Logger {
    return this.services[ 'logger' ];
  }
}
