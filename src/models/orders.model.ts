import { RowDataPacket } from 'mysql2';
import connection from './connection';

type Orders = {
  id: number,
  userId: number,
  productsIds: number[],
};

const getOrders = async (): Promise<Orders[]> => {
  const [orders] = await connection.execute<RowDataPacket[]>(
    `SELECT orders.id as id, orders.user_id as userId, JSON_ARRAYAGG(products.id) as productsIds 
    FROM Trybesmith.orders AS orders
    INNER JOIN Trybesmith.products AS products ON orders.id = products.order_id
    GROUP BY orders.id`,
  );
  return orders as Orders[];
};

export default { getOrders };
