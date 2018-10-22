import Container from "../src/core/container";
import config from "../src/config/config";
import winston from "winston";
import express from 'express';

export default () => {
  const container = new Container();
  container.config = config;
  container.logger = winston.createLogger({ transports: [] });
  container.app = express();

  return container;
}
