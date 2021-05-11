import {Router} from 'express';

const router=Router();

import {getPosts,getPublicacion,getOne} from '../controllers/publicacionesController';

router.route('/')
    .get(getPosts);
router.route('/')
    .post(getPublicacion);
router.route('/:id')
    .get(getOne);
    export default router;