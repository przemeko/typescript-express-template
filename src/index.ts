import express from 'express';
import logger from './utils/logger';
import config from './config/config';
import Server from './server';
import Container from './core/container';

const container = new Container();
container.config = config;
container.logger = logger('app');
container.app = express();

const server = new Server(container);

server.listen();
