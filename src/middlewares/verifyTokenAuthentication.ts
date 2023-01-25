import {Request, Response, NextFunction} from "express";
import {verify} from "jsonwebtoken";

interface IPayload{
  sub:string;
  iat:number;
  exp: number;
  name:string;
}

export function verifyTokenAuthentication(
  request: Request,
  response:Response, 
  next:NextFunction
  ){
    // pegar o token dentro do cabeçalho da requisição e verificar se existe
    const header = request.headers.authorization;

    if(!header){
      return response.status(403).json({message:"token missing"})
    }
    // retirar Bearer dfgdfgfhsivvbkvkjb que está com o token
    // [0] Bearer
    // [1] dfgdfgfhsivvbkvkjb 
    const token = header.split(" ")[1];
    // validar se é o token gerado é válido com a chave utilizada e pegar os payload
    try {
      const {sub,name}  = verify(token,process.env.KEY_TOKEN!) as IPayload;
      console.log(sub);
      // alterar requisição
      request.user = {
        id:Number(sub),
        name,
      };
      return next();
    } catch (error) {
      return response.status(403).json({message:"token is not valid"})
    }
    
}