import express from 'express';
import ProductManager from './src/ProductManager.js';

const app = express();
const productManager = new ProductManager('./src/products.json');

async function startServer() {
  await productManager.loadProductsFromFile();

  app.get('/products', (req, res) => {
    const limit = req.query.limit;
    const products = productManager.getProducts(limit);
    res.json(products);
  });

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}

startServer();