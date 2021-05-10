import {Request, Response} from 'express';

import {connect} from '../database';

export async function obtenerUsuarios(req: Request,res:Response): Promise<any>{

    const conn = await connect();
    const usuarios = await conn.query('SELECT * from usuario');
    
    return res.json(usuarios);
};

export async function getOne(req: Request, res: Response): Promise<any> {
    const conn = await connect();
    const { id } = req.params;
    const usuarios = await conn.query("SELECT idUsuario, Nombre, Username, Correo, Contrasenia, Biografia, DATE_FORMAT(fecha, '%y/%m/%d') AS Fecha, tipo FROM usuario WHERE idUsuario = ?", [id]);
    
    if (usuarios.length > 0) {
        return res.json(usuarios[0]);
    }
    res.status(404).json({ text: "The user doesn't exits" });
};

export async function create(req: Request, res: Response): Promise<void> {
    const conn = await connect();
    const result = await conn.query('INSERT INTO usuario set ?', [req.body]);
    res.json({ message: 'User Saved' });
};

export async function update(req: Request, res: Response): Promise<void> {
    const conn = await connect();
    const { id } = req.params;
    const oldUser = req.body;
    await conn.query('UPDATE usuario set ? WHERE idUsuario = ?', [req.body, id]);
    res.json({ message: "The user was Updated" });
};

export  async function eliminar(req: Request, res: Response): Promise<void> {
    const conn = await connect();
    const { id } = req.params;
    await conn.query('DELETE FROM usuario WHERE idUsuario = ?', [id]);
    res.json({ message: "The user was deleted" });
};