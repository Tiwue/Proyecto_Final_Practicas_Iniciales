import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import loginRoutes from './routes/loginRoutes';
import publicacionesRoutes from './routes/publicacionesRoutes';
import cambio from './routes/cambio'
import forgPass from './routes/forgPass'
import registroRoutes from './routes/registroRoutes'
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
        this.app.use('/posts',publicacionesRoutes)
    }

    start():void{
        this.app.listen(this.app.get('port'),()=>{
        console.log('Prueba de puerto', this.app.get('port'))});
    }
    }

const server = new Server();

server.start();