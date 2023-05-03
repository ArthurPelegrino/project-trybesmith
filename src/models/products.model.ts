import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';

type Product = {
  id: number,
  name: string,
  amount: string,
  orderId?: number
};

const addProduct = async (name: string, amount: string): Promise<Product> => {
  console.log(name, amount);
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  const newProduct = { id, name, amount };
  return newProduct;
};

const getAll = async (): Promise<Product[]> => {
  const [rows] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.products',
  );
  return rows as Product[];
};

export default {
  addProduct, 
  getAll };