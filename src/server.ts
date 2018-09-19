import App from './App';
import config from './config/config';
import Router from './Router';

const app = new App(config);
Router.init(app);

app.listen();

