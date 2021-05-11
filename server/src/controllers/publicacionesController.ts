import {Request, Response} from 'express';

import {connect} from '../database';

export async function getPosts(req: Request,res:Response): Promise<any>{

    const conn = await connect();
    const posts = await conn.query('SELECT publicacion.idPublicacion, publicacion.Fecha, publicacion.Comentario, juego.Nombre AS nombreJuego, usuario.Nombre AS Usuario, juego.Cartucho FROM publicacion INNER JOIN juego ON publicacion.Juego_idJuego=juego.idJuego INNER JOIN usuario ON publicacion.Usuario_idUsuario=usuario.idUsuario');
    return res.json(posts);
};

export async function getPublicacion(req: Request,res:Response): Promise<any>{

    const conn = await connect();
    const datos=req.body;
    console.log(datos.Nombre)
    const posts = await conn.query('SELECT publicacion.Fecha, publicacion.Comentario, juego.Nombre AS nombreJuego, usuario.Nombre AS Usuario, juego.Cartucho FROM publicacion INNER JOIN juego ON publicacion.Juego_idJuego=juego.idJuego INNER JOIN usuario ON publicacion.Usuario_idUsuario=usuario.idUsuario WHERE juego.Nombre=?',[datos.Nombre]);
    return res.json(posts);
};

export async function getOne(req: Request, res: Response): Promise<any> {
    const conn = await connect();
    const { id } = req.params;
    const games = await conn.query('SELECT publicacion.idPublicacion, publicacion.Fecha, publicacion.Comentario, juego.Nombre AS nombreJuego, usuario.Nombre AS Usuario, juego.Cartucho FROM publicacion INNER JOIN juego ON publicacion.Juego_idJuego=juego.idJuego INNER JOIN usuario ON publicacion.Usuario_idUsuario=usuario.idUsuario WHERE publicacion.idPublicacion=?',[id]);
    console.log(games[0])
    if (games.length > 0) {
        return res.json(games[0]);
    }
    res.status(404).json({ text: "The game doesn't exits" });
};
