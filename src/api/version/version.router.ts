import { Router } from 'express';
import Container from '../../core/container';
import VersionController from './version.controller';

export default (container: Container) => {

  const router = Router();
  const versionController = new VersionController(container);

  router.route('/')
    .get(versionController.get.bind(versionController));

  return router;
}
