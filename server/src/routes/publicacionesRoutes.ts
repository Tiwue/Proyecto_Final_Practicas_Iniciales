import {Router} from 'express';

const router=Router();

import {getPosts,getPublicacion} from '../controllers/publicacionesController';

router.route('/')
    .get(getPosts);
router.route('/')
    .post(getPublicacion);
    export default router;