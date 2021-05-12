import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import loginRoutes from './routes/loginRoutes';
import juegosRoutes from './routes/juegosRoutes';
import publicacionesRoutes from './routes/publicacionesRoutes';
import cambio from './routes/cambio'
import forgPass from './routes/forgPass'
import registroRoutes from './routes/registroRoutes'
import logOut from './routes/logoutRoutes'
import getSesion from './routes/getSesionRoute'
import getUsers from './routes/getUsuariosRoute'
import getGames from './routes/getGamesRoutes'
import gamesRoutes from './routes/gamesRoutes'
import createNewPost from './routes/newPostRoutes'
import usersRoutes from './routes/usersRoutes'
import viewPerfil from './routes/viewPerfilRoutes'

class Server{
    public app: Application ; 
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'))
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}))
        
    }

    routes(): void{
        this.app.use('/',indexRoutes);
        this.app.use('/login', loginRoutes);
        this.app.use('/registro', registroRoutes);
        this.app.use('/forgPass', forgPass );
        this.app.use('/cambio', cambio);
        this.app.use('/posts',publicacionesRoutes);
        this.app.use('/logout', logOut);
        this.app.use('/getSesion', getSesion);
        this.app.use('/juegos', juegosRoutes);
        this.app.use('/getUsers', getUsers);
        this.app.use('/games',gamesRoutes);
        this.app.use('/getGames', getGames);
        this.app.use('/createNewPost', createNewPost);
        this.app.use('/users', usersRoutes);

        this.app.use('/createNewPost', createNewPost);
        this.app.use('/perfil',viewPerfil);
    }

    start():void{
        this.app.listen(this.app.get('port'),()=>{
        console.log('Server activo en puerto: ', this.app.get('port'))});
    }
    }

const server = new Server();

server.start();