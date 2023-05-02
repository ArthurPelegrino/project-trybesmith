import addProduct from '../models/products.model';

type Product = {
  id: number,
  name: string,
  amount: string,
};

const registerNewProduct = async (name: string, amount: string): Promise<Product | undefined> => {
  const newProduct = await addProduct(name, amount);
  return newProduct;
};

export default registerNewProduct;