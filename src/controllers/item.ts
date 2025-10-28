import type { Request, Response } from 'express';

const Item = require('../models/Item');


async function create(req : Request, res: Response){

    const newItem = new Item(req.body);
    try{
        const savedItem = await newItem.save();
        return res.status(201).json(savedItem);
        
    }catch(err:any){
        return res.status(500).json({message: err.message});
    }
}

async function getAll(req : Request, res: Response){
    try{
        const items = await Item.find();
        return res.status(200).json(items);
    }catch(err:any){
        return res.status(500).json({message: err.message});
    }
}

async function getById(req : Request, res: Response){
    try{
        const item = await Item.findById(req.params.id);
        if(!item){
            return res.status(404).json({message: "Item not found"});
        }
        return res.status(200).json(item);
    }catch(err:any){
        return res.status(500).json({message: err.message});
    }

}

async function update(req : Request, res: Response){
    try{
        const oldItem = await Item.findById(req.params.id);
        if(!oldItem){
            return res.status(404).json({message: "Item not found"});
        }
        oldItem.name = req.body.name || oldItem.name;
        oldItem.description = req.body.description || oldItem.description;
        oldItem.price = req.body.price || oldItem.price;

        const updatedItem = await oldItem.save();
        return res.status(200).json(updatedItem);
    }catch(err:any){
        return res.status(500).json({message: err.message});
    }
}

async function remove(req : Request, res: Response){
    try{
        const item = await Item.findById(req.params.id);
        if(!item){
            return res.status(404).json({message: "Item not found"});
        }
        await item.remove();
        return res.status(204).json();
    }catch(err:any){
        return res.status(500).json({message: err.message});
    }
}

module.exports = {create, getAll, getById, update, remove}