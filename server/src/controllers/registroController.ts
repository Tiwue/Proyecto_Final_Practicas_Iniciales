import {Request, Response} from 'express';

import {connect} from '../database';


export async function registrarUsuario(req: Request,res:Response):Promise<any>{

    const datos = req.body;
    const conn = await connect();
    if (datos.usuario != '' && datos.contrasenia !=''){
    const consulta= await conn.query('SELECT * FROM usuario WHERE username= ?',[datos.usuario]);
     res.send("Usuario agregado");};
};