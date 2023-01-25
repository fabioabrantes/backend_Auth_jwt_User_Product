import {compare} from'bcrypt';
import {sign} from 'jsonwebtoken';

import {prisma} from '../../database/repositorioClient';

import { AuthenticateDTO } from '../../dto/AuthenticateDTO';
import { UserDTO } from '../../dto/UserDTO';
import { AppErrosCustom } from '../../errors/AppErrorsCustom';

interface IData{
  user: UserDTO;
  token:string;
}

export class AuthenticateUseCase{

  async execute({email,password}:AuthenticateDTO):Promise<IData>{
    
   // verificar se existe o client cadastrado
      const userExist = await prisma.users.findFirst({
        where:{
          email
        }
      });

      if(!userExist){
        throw new AppErrosCustom('email or password invalid',401);
      }
    // verificar se a senha corresponde ao usernames
      const isPassword = await compare(password,userExist.password);
      
      if(!isPassword){
        throw new AppErrosCustom('username or password invalid',401);
      }

    // gerar o token https://www.md5hashgenerator.com/
      const token = sign(
        {
          name:userExist.name,
        },
        process.env.KEY_TOKEN!,
        {
          expiresIn:'1d',
          algorithm:'HS256',
          subject:String(userExist.id)
        }
      );

      return {token,user:userExist};
  }
}