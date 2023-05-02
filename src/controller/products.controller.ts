import { Request, Response } from 'express';
import registerNewProduct from '../service/products.service';

const registerProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const message = await registerNewProduct(name, amount);
  return res.status(201).json(message);   
};

export default registerProduct;