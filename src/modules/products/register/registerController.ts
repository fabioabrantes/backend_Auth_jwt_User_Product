import {Request, Response} from 'express';
import { RegisterUseCase } from './registerUseCase';

export class RegisterController{

  async handle(req: Request, res: Response): Promise<Response>{
  
    // pega o item_name informado pelo usuário e pegar o id_client da requisição quando logado
    const {name,price,descriptions} = req.body;
    console.log(name);
    const id_user = req.user.id;

    const registerUseCase = new RegisterUseCase();
    const result = await registerUseCase.execute({
      name,
      price:Number(price),
      descriptions,
      id_user
    });

    return res.status(200).json(result);
  }
}