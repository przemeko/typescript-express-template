import StatusCodes from 'http-status-codes';
import 'mocha';
import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
import testContainer from './../../../test/test-container';
import Server from "../../server";
import EtherscanClientService, { ResponseDataScheme } from '../../services/etherscan-client.service';
import { mock, when, instance } from 'ts-mockito';

chai.use(chaiHttp);

describe('blockchain api', () => {
  const PATH = '/api/blockchain';
  const container = testContainer();
  const server = new Server(container);

  let mockedEthClientService: EtherscanClientService = mock(EtherscanClientService);

  it('should returns correct balance', async () => {
    const address = 'ad1';
    const data: ResponseDataScheme = {
      message: 'OK',
      result: '123',
      status: '1'
    };

    when(mockedEthClientService.getAddressBalance(address))
      .thenReturn(Promise.resolve(data));

    const ethClientService = instance(mockedEthClientService);
    container.set('etherscan-client.service', ethClientService);

    const res = await chai.request(server.getContainer().app)
      .get(`${PATH}/addresses/${address}/balance`);

    expect(res).to.have.status(StatusCodes.OK);
    expect(res.body.address.balance).to.be.eq(data.result);
  })
});
