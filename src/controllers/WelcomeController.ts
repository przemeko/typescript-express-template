import StatusCodes from 'http-status-codes';
import { Request, Response } from "express";
import BaseController from "./BaseController";

export default class WelcomeController extends BaseController {

  public hello(request: Request, response: Response): void {
    response
      .status(StatusCodes.OK)
      .send({ text: 'hello' });
  }
}
