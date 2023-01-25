import {Router} from 'express';

import { routesUsers } from './routes.user';
import { routesAuth } from './routes.authenticate';
import { routesProducts } from './routes.products';

const routes = Router();

routes.use(routesUsers);
routes.use(routesAuth);
routes.use(routesProducts);

export {routes}
