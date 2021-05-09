import { Request, Response } from 'express';

import { connect } from '../database';


export async function createNewPost(req: Request, res: Response): Promise<any> {

    const datos = req.body;
    const conn = await connect();

    if (datos.idUsuario != "0" && datos.idJuego != "0" && datos.Comentario != "") 
    {
        try 
        {
            const consulta = await conn.query('INSERT into publicacion set ?', [req.body]);
            res.json({mensaje: "publicado" })
            console.log("publicado")
        } 
        catch (error) 
        {
            console.log(error)
        }
    } 
    else 
    {
        console.log("Debe llenar todos los campos")
        //res.json({ acceso: false, mensaje: "Debe llenar todos los campos" })
    }
};