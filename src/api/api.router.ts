import { Router } from 'express';
import productRouter from './product/product.router';
import versionRouter from './version/version.router';
import Container from '../core/container';

export default (container: Container): Router => {

  const router = Router();
  router.use('/products', productRouter(container));
  router.use('/version', versionRouter(container));

  return router;
}



