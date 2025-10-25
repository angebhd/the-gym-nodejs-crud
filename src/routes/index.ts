import type {Item} from '../types/items';
import { type Request, type Response, type Router } from 'express'
const express = require('express');
const items = require('../mockData').items;

const router: Router = express.Router()

router.get("/", (req: Request, res: Response) => {
    return res.status(200).json(items);
})

router.get("/:id", (req: Request, res: Response) => {
    const item = items.find((i: Item) => i.id === req.params.id);
    if (item) {
        return res.status(200).json(item);
    } else {
        return res.status(404).json({ message: "Item not found" });
    }
})

router.post("/", (req: Request, res: Response) => {
    const newItem = req.body;
    items.push(newItem);
    return res.status(201).json(newItem);
})


module.exports = router;