import { Request, Response } from "express";

export default (key: string, value: string) => {
  return (request: Request, response: Response, next: Function) => {
    response.setHeader(key, value);
    next();
  }
}
