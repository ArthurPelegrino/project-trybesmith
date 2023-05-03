import ordersModel from '../models/orders.model';

const getOrders = async () => {
  const orders = await ordersModel.getOrders();
  return orders;
};

export default { getOrders };