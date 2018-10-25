import Container from '../../core/container';
import { Request, Response } from 'express';

export default class VersionController {
  constructor(private container: Container) {
  }

  public get(request: Request, response: Response) {
    return response
      .send({ 'version': this.container.config.appVersion });
  }
}
