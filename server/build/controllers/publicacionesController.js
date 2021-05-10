"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPublicacion = exports.getPosts = void 0;
const database_1 = require("../database");
function getPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const posts = yield conn.query('SELECT publicacion.Fecha, publicacion.Comentario, juego.Nombre AS nombreJuego, usuario.Nombre AS Usuario, juego.Cartucho FROM publicacion INNER JOIN juego ON publicacion.Juego_idJuego=juego.idJuego INNER JOIN usuario ON publicacion.Usuario_idUsuario=usuario.idUsuario');
        return res.json(posts);
    });
}
exports.getPosts = getPosts;
;
function getPublicacion(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const datos = req.body;
        console.log(datos.Nombre);
        const posts = yield conn.query('SELECT publicacion.Fecha, publicacion.Comentario, juego.Nombre AS nombreJuego, usuario.Nombre AS Usuario, juego.Cartucho FROM publicacion INNER JOIN juego ON publicacion.Juego_idJuego=juego.idJuego INNER JOIN usuario ON publicacion.Usuario_idUsuario=usuario.idUsuario WHERE juego.Nombre=?', [datos.Nombre]);
        return res.json(posts);
    });
}
exports.getPublicacion = getPublicacion;
;
