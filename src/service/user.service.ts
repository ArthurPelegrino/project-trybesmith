import jwt from 'jsonwebtoken';
import userModel from '../models/user.model';

const registerUser = async (
  username: string,
  vocation: string, 
  level: number, 
  password: string,
): Promise<string> => {
  const user = await userModel.registerUser(username, vocation, level, password);
  const token = jwt.sign({ usuario: user.username }, 'RANDOM');
  return token;
}; 

export default { registerUser };