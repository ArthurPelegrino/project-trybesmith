import express from 'express';
import productsRouter from './router/products.router';
import usersRouter from './router/users.router';

const app = express();
app.use(express.json());

app.use('/', productsRouter);
app.use('/', usersRouter);

export default app;

//  let's go
