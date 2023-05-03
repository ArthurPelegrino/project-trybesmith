import { Request, Response } from 'express';
import userService from '../service/user.service';

const newUser = async (req: Request, res: Response) => {
  const { username, vocation, level, password } = req.body;

  if (!username || !vocation || !level || !password) {
    return res.status(400).json({ message: 'Bad request' });
  }

  const token = await userService.registerUser(username, vocation, level, password);

  return res.status(201).json({ token });
};

export default { newUser };