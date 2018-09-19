import App from './../../src/App';
import Router from './../../src/Router';
import config from './../../src/config/config';
import StatusCodes from 'http-status-codes';
import 'mocha';
import {expect} from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

describe('IndexController', () => {
  const app = new App(config);
  Router.init(app);
  
  it('should returns correct version', () => {
    chai.request(app.express)
      .get('/')
      .then((res) => {
        expect(res).to.have.status(StatusCodes.OK);
        expect(res.body.version).to.be.eq(config.appVersion);
      });
  })
})
