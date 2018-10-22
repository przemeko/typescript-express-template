import StatusCodes from 'http-status-codes';
import 'mocha';
import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
import config from './../../config/config';
import Container from './../../core/container';
import logger from './../../utils/logger';
import express from 'express';
import Server from './../../server';

chai.use(chaiHttp);

describe('version api', () => {
  const VERSION_PATH = '/api/version';

  const container = new Container();
  container.config = config;
  container.logger = logger('testApp');
  container.app = express();

  const server = new Server(container);

  it('should returns correct version', () => {
    chai.request(container.app)
      .get(VERSION_PATH)
      .then((res) => {
        expect(res).to.have.status(StatusCodes.OK);
        expect(res.body.version).to.be.eq(container.config.appVersion);
      });
  })
});
