import {Request,Response} from 'express';

export function indexWelcome(req:Request,res:Response): void{
res.send("index")
};
    


