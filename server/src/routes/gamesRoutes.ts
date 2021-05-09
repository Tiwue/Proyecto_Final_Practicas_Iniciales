import {Router} from 'express';

const router=Router();

import {create,eliminar,update,getOne,obtenerJuegos} from '../controllers/gamesController';

router.route('/')
    .get(obtenerJuegos);

router.route('/:id')
    .get(getOne);
router.route('/')
    .post(create);

router.route('/:id')
    .put(update);

router.route('/:id')
    .delete(eliminar);



    export default router;