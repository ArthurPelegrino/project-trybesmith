import { Router } from 'express';
import productsController from '../controller/products.controller';

const productsRouter = Router();

productsRouter.post('/products', productsController.registerProduct);
productsRouter.get('/products', productsController.getProducts);

export default productsRouter;