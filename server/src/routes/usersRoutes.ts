import {Router} from 'express';
import { obtenerUsers } from '../controllers/getUsuariosController';

const router=Router();

import {create,eliminar,update,getOne,obtenerUsuarios} from '../controllers/usuariosController';

router.route('/')
    .get(obtenerUsuarios);

router.route('/:id')
    .get(getOne);
router.route('/')
    .post(create);

router.route('/:id')
    .put(update);

router.route('/:id')
    .delete(eliminar);



    export default router;