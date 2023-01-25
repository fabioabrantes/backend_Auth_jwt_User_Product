import {Router} from 'express';
import { AuthenticateController } from '../modules/authentication/authenticateController';


const routesAuth = Router();

const authenticateController = new AuthenticateController();
routesAuth.post('/auth/login',authenticateController.handle);

export {routesAuth}