import { Request, Response } from "express";
import { Logger } from "winston";

export default (logger: Logger) => {
  return (request: Request, response: Response, next: Function) => {
    const body = request.body ? request.body : '';
    logger.info(`[${request.method}] ${request.path} ${body}`);
    next();
  }
}
