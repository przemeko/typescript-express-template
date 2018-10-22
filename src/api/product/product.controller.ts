import Container from '../../core/container';
import { Request, Response } from 'express';

export default class ProductController {
  constructor(private container: Container) {

  }

  public get(request: Request, response: Response) {
    return response
      .send({ 'products': [] });
  }

  public post(request: Request, response: Response) {
    return response
      .send({ 'product': [] });
  }
}
