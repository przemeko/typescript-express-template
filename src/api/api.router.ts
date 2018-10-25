import { Router } from 'express';
import productRouter from './product/product.router';
import versionRouter from './version/version.router';
import blockchainRouter from './blockchain/blockchain.router';
import Container from '../core/container';

export default (container: Container): Router => {

  const router = Router();
  router.use('/products', productRouter(container));
  router.use('/version', versionRouter(container));
  router.use('/blockchain', blockchainRouter(container));

  return router;
}



