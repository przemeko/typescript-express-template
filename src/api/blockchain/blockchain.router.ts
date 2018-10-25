import { Router } from 'express';
import Container from '../../core/container';
import BlockchainController from './blockchain.controller';

export default (container: Container) => {

  const router = Router();
  const blockchainController = new BlockchainController(container);

  router.route('/addresses/:address/balance')
    .get(blockchainController.getAddressBalance.bind(blockchainController));

  return router;
}
