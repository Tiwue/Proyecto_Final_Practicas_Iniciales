import {Request, Response} from 'express';

import {connect} from '../database';

export async function getLogin(req: Request,res:Response): Promise<Response>{

    const conn = await connect();
    const usuarios = await conn.query('SELECT * FROM usuario');
    return res.json(usuarios[2]);
};

export async function validarCredenciales(req: Request,res:Response){

    const newSolicitud = req.body;
    return res.json({
        message: 'Validando Credenciales'
    });
};