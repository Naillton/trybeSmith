import { Request, Response } from 'express';
import ProductService from '../services/product.services';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.productService.create(product);
    res.status(201).json(productCreated);
  };

  public getAll = async (req: Request, res: Response) => {
    const prods = await this.productService.getAll();
    return res.status(200).json(prods);
  };
}

export default ProductController;