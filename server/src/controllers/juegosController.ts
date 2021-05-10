import {Request, Response} from 'express';

import {connect} from '../database';

export async function getJuegos(req: Request,res:Response): Promise<any>{

    const conn = await connect();
    const juegos = await conn.query('SELECT * FROM juego');
    return res.json(juegos);
};
export async function buscarJuego(req: Request,res:Response): Promise<any>{

    const conn = await connect();
    const datos=req.body;
    console.log(datos.Nombre)
    const juegos = await conn.query('SELECT * FROM juego WHERE Nombre=?',[datos.Nombre]);
    return res.json(juegos);
};

