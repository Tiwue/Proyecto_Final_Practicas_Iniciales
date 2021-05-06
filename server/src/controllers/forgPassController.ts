import {Request, Response} from 'express';

import {connect} from '../database';


export async function recuperarContraseña(req: Request,res:Response):Promise<any>{

    const datos = req.body;
    console.log(datos.Username)
    const conn = await connect();
    
    if (datos.Username != "" && datos.Correo !=""){
    const consulta= await conn.query('SELECT * FROM usuario WHERE username= ?',[datos.Username]);
    try{
    if (consulta[0].Username == datos.Username && consulta[0].Correo == datos.Correo){
         res.json({acceso: true, mensaje: 'valido'})
    }else{
        res.json({acceso: false, mensaje: 'Los datos no coinciden, intente nuevamente'})
    }
    }catch(error){
        console.log("Usuairo no registrado")
         res.json({acceso: false, mensaje: "Usuario no registrado"})
    }
        }else{
    console.log("Debe llenar todos los campos")
           res.json({acceso:false, mensaje:"Debe llenar todos los campos"})
}
};

export async function cambiarContraseña(req: Request,res:Response):Promise<any>{

    const datos = req.body;
    console.log(datos.Username);
    console.log(datos.Contrasenia);
    const conn = await connect();
    
    if (datos.Username != "" && datos.Contrasenia !=""){
    const consulta= await conn.query('UPDATE usuario SET Contrasenia= ? WHERE username= ?',[datos.Contrasenia, datos.Username]);
    res.json({acceso:true, mensaje:"Contraseña Actualizada"})
        }else{
    console.log("Debe llenar todos los campos")
           res.json({acceso:false, mensaje:"Debe llenar todos los campos"})
}
};
