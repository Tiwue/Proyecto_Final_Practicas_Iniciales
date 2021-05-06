import {Request, Response} from 'express';

import {connect} from '../database';

export async function getPosts(req: Request,res:Response): Promise<any>{

    const conn = await connect();
    const posts = await conn.query('SELECT publicacion.Fecha, publicacion.Comentario, juego.Nombre AS nombreJuego, usuario.Nombre AS Usuario, juego.Imagen FROM publicacion INNER JOIN juego ON publicacion.Juego_idJuego=juego.idJuego INNER JOIN usuario ON publicacion.Usuario_idUsuario=usuario.idUsuario');
    return res.json(posts);
};