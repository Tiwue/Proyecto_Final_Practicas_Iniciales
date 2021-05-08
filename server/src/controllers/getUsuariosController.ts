import {Request, Response} from 'express';

import {connect} from '../database';

export async function obtenerUsers(req: Request,res:Response): Promise<any>{

    const conn = await connect();
    const usuarios = await conn.query('SELECT * from usuario');
    
    return res.json(usuarios);
};