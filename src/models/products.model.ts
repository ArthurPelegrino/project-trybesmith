import { ResultSetHeader } from 'mysql2';
import connection from './connection';

type Product = {
  id: number,
  name: string,
  amount: string,
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

export default addProduct;