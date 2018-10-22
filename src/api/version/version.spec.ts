import StatusCodes from 'http-status-codes';
import 'mocha';
import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
import testContainer from './../../../test/test-container';
import Server from "../../server";

chai.use(chaiHttp);

describe('version api', () => {
  const VERSION_PATH = '/api/version';
  const container = testContainer();
  const server = new Server(container);

  it('should returns correct version', () => {
    chai.request(server.getContainer().app)
      .get(VERSION_PATH)
      .then((res) => {
        expect(res).to.have.status(StatusCodes.OK);
        expect(res.body.version).to.be.eq(server.getContainer().config.appVersion);
      });
  })
});
