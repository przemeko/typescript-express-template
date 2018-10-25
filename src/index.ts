import express from 'express';
import logger from './utils/logger';
import config from './config/config';
import Server from './server';
import Container from './core/container';
import EtherscanClient from './services/etherscan-client.service';

const container = new Container();
container.config = config;
container.logger = logger('app');
container.app = express();
container.set('etherscan-client.service', new EtherscanClient(config.etherscan.apiKey));

const server = new Server(container);

server.listen();
