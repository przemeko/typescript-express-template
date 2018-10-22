import 'mocha';
import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
import customHeader from './../middleware/custom-header.middleware';
import express from 'express';

chai.use(chaiHttp);

describe('middleware custom header', () => {
  it('should returns correct value', () => {
    const app = express();
    const key = 'header-key';
    const value = 'heaader-value';

    app.use(customHeader(key, value));
    app.get('/', (req, res) => {
      res.send();
    });
    chai.request(app)
      .get('/')
      .then((res) => {
        expect(res.get(key)).to.be.eq(value);
      });
  })
});
