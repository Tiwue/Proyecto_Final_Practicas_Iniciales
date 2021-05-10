import {Request, Response} from 'express';

import {connect} from '../database';

export async function obtenerJuegos(req: Request,res:Response): Promise<any>{

    const conn = await connect();
    const juegos = await conn.query('SELECT * from juego');
    
    return res.json(juegos);
};

export async function getOne(req: Request, res: Response): Promise<any> {
    const conn = await connect();
    const { id } = req.params;
    const games = await conn.query("SELECT idJuego,Nombre, descripcion, cartucho, DATE_FORMAT(fecha, '%y/%m/%d') AS Fecha, Consola_idConsola FROM juego WHERE idJuego = ?", [id]);
    
    if (games.length > 0) {
        return res.json(games[0]);
    }
    res.status(404).json({ text: "The game doesn't exits" });
};

export async function create(req: Request, res: Response): Promise<void> {
    const conn = await connect();
    const result = await conn.query('INSERT INTO juego set ?', [req.body]);
    res.json({ message: 'Game Saved' });
};

export async function update(req: Request, res: Response): Promise<void> {
    const conn = await connect();
    const { id } = req.params;
    const oldGame = req.body;
    await conn.query('UPDATE juego set ? WHERE idJuego = ?', [req.body, id]);
    res.json({ message: "The game was Updated" });
};

export  async function eliminar(req: Request, res: Response): Promise<void> {
    const conn = await connect();
    const { id } = req.params;
    await conn.query('DELETE FROM juego WHERE idJuego = ?', [id]);
    res.json({ message: "The game was deleted" });
};