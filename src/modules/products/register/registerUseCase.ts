import {prisma} from '../../../database/repositorioClient';

import {ProductDTO} from '../../../dto/ProductDTO';
import { AppErrosCustom } from '../../../errors/AppErrorsCustom';

export class RegisterUseCase{

  async execute({name,price,descriptions,id_user}:ProductDTO){
    
    const  product = await prisma.products.create({
      data:{
        name,
        price,
        descriptions,
        id_fk_user:id_user
      }
    })
    if(!product){
      throw new AppErrosCustom('Product not created exists',400)
    }
   
    return product;
  }
}