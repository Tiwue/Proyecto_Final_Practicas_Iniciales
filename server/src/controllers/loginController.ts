import {Request, Response} from 'express';

import {connect} from '../database';

export async function getLogin(req: Request,res:Response): Promise<any>{

    const conn = await connect();
    const usuarios = await conn.query('SELECT * FROM usuario');
    return res.json(usuarios[1]);
};

export async function validarCredenciales(req: Request,res:Response):Promise<any>{

    const datos = req.body;
    console.log(datos.contrasenia);
    console.log(datos.usuario);
    const conn = await connect();
    const consulta= await conn.query('SELECT * FROM usuario WHERE username= ?',[datos.usuario]);
    console.log(consulta);
    console.log([datos.contrasenia]);
    console.log(consulta[0].Contrasenia);
}; 