import {Request, Response} from 'express';

import {connect} from '../database';


export async function getOne(req: Request, res: Response): Promise<any> {
    const conn = await connect();
    const { id } = req.params;
    const perfil = await conn.query('SELECT * FROM usuario WHERE idUsuario = ?', [id]);
    
    if (perfil.length > 0) {
        return res.json(perfil[0]);
    }
    res.status(404).json({ text: "The profile doesn't exits" });
};