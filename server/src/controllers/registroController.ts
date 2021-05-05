import {Request, Response} from 'express';

import {connect} from '../database';


export async function registrarUsuario(req: Request,res:Response):Promise<any>{

    const datos = req.body;
    const conn = await connect();
    console.log(datos.Nombre);
    console.log(datos.Username);
    console.log(datos.Contrasenia);
    console.log(datos.Correo);
    console.log(datos.Fecha);
    if (datos.Username != "" && datos.Contrasenia !="" && datos.Nombre != ""&& datos.Fecha != "" && datos.Correo != "" && datos.Biografia!= ""){
    const consulta= await conn.query('SELECT * FROM usuario WHERE username= ?',[datos.Username]);
    try{
    if (consulta[0].Username == datos.Username){
         res.json({acceso: false, mensaje: "Ya existe alguien con este nombre de usuario"})
    }
    }catch(error){
        console.log("Usuario no registrado")
        const consulta= await conn.query('INSERT into usuario set ?',[req.body]);
         res.json({acceso: false, mensaje: "Usuario registrado"})
    }
        }else{
    console.log("Debe llenar todos los campos")
           res.json({acceso:false, mensaje:"Debe llenar todos los campos"})
}
};