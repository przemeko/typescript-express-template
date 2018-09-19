import App from './../App';
import { ConfigInterface } from "../config/config";
import winston from 'winston';

export default abstract class BaseController {
  protected app: App;

  public constructor(app: App) {
    this.app = app;
  }

  protected get config(): ConfigInterface {
    return this.app.config;
  }

  protected get logger(): winston.Logger {
    return this.app.logger;
  }
}
