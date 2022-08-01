import connection from '../models/connection';
import ProductModel from '../models/product.model';
import Product from '../interfaces/product.interface';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async create(prod: Product): Promise<Product> {
    return this.model.create(prod);
  }

  public async getAll(): Promise<Product[]> {
    return this.model.getAll();
  }
}

export default ProductService;