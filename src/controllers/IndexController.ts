import StatusCodes from 'http-status-codes';
import {Request, Response} from "express";
import BaseController from "./BaseController";

export default class IndexController extends BaseController {
  
  public version(request: Request, response: Response): void {
    response
      .status(StatusCodes.OK)
      .send({version: this.config.appVersion})
  }
}
