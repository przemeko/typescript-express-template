import { Router } from 'express';
import Container from '../../core/container';
import ProductController from './product.controller';

export default (container: Container) => {

  const router = Router();
  const productController = new ProductController(container);

  router.route('/')
    .get(productController.get.bind(productController))
    .post(productController.post.bind(productController));

  return router;
}
