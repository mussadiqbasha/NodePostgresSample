import { Request, Response } from 'express';
import * as ProductService from '../data/services'

// getting all prodcts
const getProducts = async (req: Request, res: Response) => {
    ProductService.getProduct()
        .then((product) => {
            res.send(product);
        })
        .catch(err => {
            res.status(404).send(err);
        })
};

// checkout product 
const addProduct = async (req: Request, res: Response) => {
    ProductService.checkOut(req.body)
        .then(() => {
            res.status(201).send("Product added");
        })
        .catch(err => {
            res.status(500).send(err);
        })
};

export default { getProducts, addProduct };