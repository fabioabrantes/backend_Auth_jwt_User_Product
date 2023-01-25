import {prisma} from '../../../database/repositorioClient';


export class ListAllUseCase{

  async execute(id_user:number){

    const userWithProducts = await prisma.users.findUnique({
      where:{
        id:id_user
      },
      select:{
        products:{
          select:{
            id:true,
            name:true,
            price:true,
            descriptions:true
          }
        }
      }
    });
 
    return userWithProducts;
  }
}