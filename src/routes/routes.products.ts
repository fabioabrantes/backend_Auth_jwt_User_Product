import {Router} from 'express';

import { verifyTokenAuthentication } from '../middlewares/verifyTokenAuthentication';
import { ListAllController } from '../modules/products/listAll/listAllController';
import { RegisterController } from '../modules/products/register/registerController';

const routesProducts = Router();

const registerByUserController = new RegisterController();
routesProducts.post('/products/register', verifyTokenAuthentication, registerByUserController.handle);

const findAllByUserController =  new ListAllController();
routesProducts.get('/products/allByUser',verifyTokenAuthentication, findAllByUserController.handle);


export {routesProducts}