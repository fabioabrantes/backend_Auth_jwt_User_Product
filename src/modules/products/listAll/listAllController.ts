import {Request, Response} from 'express';
import { ListAllUseCase } from './listAllUseCase';

export class ListAllController{

  async handle(req: Request, res: Response): Promise<Response>{
  
    // pega o id_user que foi armazenado nas requisição req: Request
    const {user} = req;

    const findAllDeliveriesUseCase = new ListAllUseCase();
    const result = await findAllDeliveriesUseCase.execute(user.id);

    return res.status(200).json(result);
  }
}