import {Router} from 'express';

const router=Router();

import {getJuegos,buscarJuego} from '../controllers/juegosController';

router.route('/')
    .get(getJuegos);
router.route('/')
    .post(buscarJuego);
    export default router; 


