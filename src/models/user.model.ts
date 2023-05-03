// import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { ResultSetHeader } from 'mysql2';
import connection from './connection';

type User = {
  username: string,
  vocation: string, 
  level: number, 
  password: string,
};

const registerUser = async (
  username: string,
  vocation: string, 
  level: number, 
  password: string,
): Promise<User> => {
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );

  const user = { id, username, vocation, level, password };
  return user; 
};

export default { registerUser };