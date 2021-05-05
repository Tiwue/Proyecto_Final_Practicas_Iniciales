import {Router} from 'express';
import {indexWelcome} from '../controllers/indexController';
class IndexRoutes{
public router: Router = Router();

constructor(){
this.config();
}

config(): void{
    this.router.get('/', indexWelcome)
}
}

const indexRoutes=new IndexRoutes();
export default indexRoutes.router;