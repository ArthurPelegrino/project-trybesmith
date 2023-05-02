import productsModel from '../models/products.model';

type Product = {
  id: number,
  name: string,
  amount: string,
};

const registerNewProduct = async (name: string, amount: string): Promise<Product | undefined> => {
  const newProduct = await productsModel.addProduct(name, amount);
  return newProduct;
};

const getAllProducts = async () => {
  const products = await productsModel.getAll();
  return products;
};

export default { registerNewProduct, getAllProducts };