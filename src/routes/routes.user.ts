import {Router} from 'express';
import { RegisterClientController } from '../modules/users/register/registerController';


const routesUsers = Router();


const registerClientController = new RegisterClientController();
routesUsers.post('/users/register',registerClientController.handle);

export {routesUsers}