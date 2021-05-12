"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const viewController_1 = require("../controllers/viewController");
router.route('/:id')
    .get(viewController_1.getOne);
exports.default = router;
