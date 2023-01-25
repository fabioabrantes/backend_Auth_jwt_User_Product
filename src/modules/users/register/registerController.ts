import {Request,Response} from 'express';
import { UserDTO } from '../../../dto/UserDTO';

import {RegisterUseCase} from './registerUseCase';

export class RegisterClientController{

  async handle(req:Request, res:Response){ 
      const {name,email, password} = <UserDTO>req.body;
      // enviar para o caso de uso
  
      const registerUseCase = new RegisterUseCase();
      const result = await registerUseCase.execute({name,email, password});
            
      return res.status(200).json(result);
    
  }
}