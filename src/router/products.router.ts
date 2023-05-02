import { Router } from 'express';
import registerProduct from '../controller/products.controller';

const productsRouter = Router();

productsRouter.post('/products', registerProduct);

export default productsRouter;