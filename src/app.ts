import express from 'express';
import productsRouter from './router/products.router';
import usersRouter from './router/users.router';
import ordersRouter from './router/orders.router';

const app = express();
app.use(express.json());

app.use('/', productsRouter);
app.use('/', usersRouter);
app.use('/', ordersRouter);

export default app;

//  let's go
