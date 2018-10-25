import Container from '../../core/container';
import { Request, Response } from 'express';
import EtherscanClient from '../../services/etherscan-client.service';

export default class BlockchainController {

  constructor(private container: Container) {
  }

  public getAddressBalance(request: Request, response: Response) {
    const address: string = request.params.address;
    const etherscanClient = this.container.get('etherscan-client.service') as EtherscanClient;

    etherscanClient.getAddressBalance(address)
      .then((data) => {
        response
          .send({ 'address': { 'balance': data.result } });

      })
      .catch((error) => {
        response
          .status(400)
          .send(error);
      })
  }
}
