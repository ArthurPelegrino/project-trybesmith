import { Router } from 'express';
import userController from '../controller/users.controller';

const usersRouter = Router();

usersRouter.post('/users', userController.newUser);

export default usersRouter;