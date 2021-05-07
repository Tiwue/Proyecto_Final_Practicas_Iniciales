import {Request, Response} from 'express';

import {connect} from '../database';

export async function obtenerSesion(req: Request,res:Response): Promise<any>{

    const conn = await connect();
    const sesion = await conn.query('SELECT * from sesion');
    
    return res.json(sesion[0]);
};
