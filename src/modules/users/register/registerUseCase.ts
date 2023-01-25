import {hash} from 'bcrypt';

import {prisma} from '../../../database/repositorioClient';
import {UserDTO} from '../../../dto/UserDTO';


import { AppErrosCustom } from '../../../errors/AppErrorsCustom';


export class RegisterUseCase{
  
  async execute({name,email,password}:UserDTO){

    // validar os campos usando um método (yup,classValidator,...)

    //verificar se ja existe um cliente 
    const existUser = await prisma.users.findFirst({
      where:{
        email
      }
    })
    if(existUser){
      throw new AppErrosCustom('User already exists',400)
    }
    // vou pegar po password e criptografar
    const passwordHash = await hash(password,10);

    // salvar client
    const user = await prisma.users.create({
      data:{
        name,email, password:passwordHash
      }
    });
    return user;
  }
}
