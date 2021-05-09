"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const newPostController_1 = require("../controllers/newPostController");
router.route('/')
    .post(newPostController_1.createNewPost);
exports.default = router;
