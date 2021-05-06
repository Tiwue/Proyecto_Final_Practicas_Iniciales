import {Router} from 'express';

const router=Router();

import {getPosts} from '../controllers/publicacionesController';

router.route('/')
    .get(getPosts);
    export default router;