import { Request,Response, NextFunction } from 'express';
import { AppErrosCustom } from '../errors/AppErrorsCustom';

export function exceptionsHandle(
  err:Error, 
  req:Request, 
  res:Response, 
  next:NextFunction){

    // verificar se o err é do tipo Error e lançar res.status(400).json({message:err.message})
    if(err instanceof AppErrosCustom){
      res.status(err.statusCode).json({message:err.message});
    }
    
    return res.status(500).json({
      status:"Error",
      message: "Error server internal"});
  }