import { Request, Response } from 'express';
import productsService from '../service/products.service';

const registerProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const message = await productsService.registerNewProduct(name, amount);
  return res.status(201).json(message);   
};

const getProducts = async (req: Request, res: Response) => {
  const products = await productsService.getAllProducts();
  return res.status(200).json(products);
};

export default { registerProduct, getProducts };