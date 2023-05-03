import { Request, Response } from 'express';
import ordersService from '../service/orders.service';

const getOrders = async (req: Request, res: Response) => {
  const orders = await ordersService.getOrders();
  return res.status(200).json(orders);
};

export default { getOrders };