import fs from 'fs';

export default class ProductManager {
  constructor(path) {
    this.path = path;
    this.products = [];
  }

  async loadProductsFromFile() {
    try {
      const fileContent = await fs.promises.readFile(this.path, 'utf-8');
      this.products = JSON.parse(fileContent);
      console.log('Products loaded successfully.');
    } catch (error) {
      console.error(`Error reading file "${this.path}". ${error.message}`);
    }
  }

  getProducts(limit) {
    if (limit) {
      return this.products.slice(0, limit);
    }
    return this.products;
  }

  getProductById(id) {
    return this.products.find((product) => product.id === id);
  }
}