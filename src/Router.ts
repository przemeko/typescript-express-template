import express from 'express';
import App from './App';
import IndexController from './controllers/IndexController';
import WelcomeController from './controllers/WelcomeController';

export default class Router {

  public static init(app: App) {

    const express: express.Application = app.express;

    const index = new IndexController(app);
    const welcome = new WelcomeController(app);

    express.get('/', index.version.bind(index));
    express.get('/welcome/hello', welcome.hello.bind(welcome));
  }
}
