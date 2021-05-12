import {Router} from 'express';

const router=Router();

import {getOne} from '../controllers/viewController';

router.route('/:id')
    .get(getOne);


    export default router;

    