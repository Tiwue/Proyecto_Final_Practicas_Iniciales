import {Request, Response} from 'express';

import {connect} from '../database';

export async function obtenerJuegos(req: Request,res:Response): Promise<any>{

    const conn = await connect();
    const juegos = await conn.query('SELECT * from juego');
    
    return res.json(juegos);
};