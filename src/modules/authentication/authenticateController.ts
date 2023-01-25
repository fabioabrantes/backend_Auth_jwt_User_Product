import {Request, Response} from 'express';
import { AuthenticateDTO } from '../../dto/AuthenticateDTO';
import { AuthenticateUseCase } from './authenticateUseCase';


export class AuthenticateController{

  async handle(req: Request, res: Response): Promise<Response>{
  
    const { email,password } = <AuthenticateDTO>req.body;
    // instantica e chama o método do caso de uso
    const authenticateUseCase = new AuthenticateUseCase()
    const {token,user} = await authenticateUseCase.execute({email,password})
    
    return res.status(200).json({token,user});
  }
}