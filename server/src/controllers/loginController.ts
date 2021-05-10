import {Request, Response} from 'express';

import {connect} from '../database';

export async function getLogin(req: Request,res:Response): Promise<any>{

    const conn = await connect();
    const usuarios = await conn.query('SELECT * FROM usuario');
    return res.json(usuarios[1]);
};

export async function validarCredenciales(req: Request,res:Response):Promise<any>{

    const datos = req.body;
    const conn = await connect();
    
    if (datos.usuario != '' && datos.contrasenia !=''){
    const consulta= await conn.query('SELECT * FROM usuario WHERE username= ?',[datos.usuario]);
    try{
        
    if (consulta[0].Contrasenia == datos.contrasenia){
        const consulta2= await conn.query('INSERT into sesion (idUsuario, Username, Tipo) VALUES (?,?,?)',[consulta[0].idUsuario, consulta[0].Username, consulta[0].Tipo]);
        res.json({acceso: true, mensaje: "Bienvenido"})

    }else{
        console.log("credenciales no validas")
         res.json({acceso: false, mensaje:"Credenciales no validas"})
    }
    }catch(error){
        console.log("Usuario no registrado")
         res.json({acceso: false, mensaje: "Usuario no registrado"})
    }
        }else{
    console.log("Debe llenar todos los campos")
           res.json({acceso:false, mensaje:"Debe llenar todos los campos"})
}
    
    
}; 