import {Router} from 'express';

const router=Router();

import {obtenerJuegos} from '../controllers/getJuegosController';

router.route('/')
    .get(obtenerJuegos);


    export default router;

    