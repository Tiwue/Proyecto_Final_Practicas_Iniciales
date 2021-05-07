import {Request, Response} from 'express';

import {connect} from '../database';

export async function cerrarSesion(req: Request,res:Response): Promise<any>{

    const conn = await connect();
    const usuarios = await conn.query('DELETE from sesion');
    console.log('sesion cerrada');
    return res.json({mensaje: 'sesion cerrada'});
};


    
    
