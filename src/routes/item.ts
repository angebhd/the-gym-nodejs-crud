import type {Item} from '../types/items';
import { type Request, type Response, type Router } from 'express'
const express = require('express');
const items = require('../mockData').items;
const itemController = require('../controllers/item');

const router: Router = express.Router()

router.get("/", itemController.getAll)

router.get("/:id", itemController.getById)

router.post("/", itemController.create)

router.put("/:id", itemController.update)

router.delete("/:id", itemController.remove)

module.exports = router;