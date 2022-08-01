import { Request, Response } from 'express';
import OrderService from '../services/order.service';

class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAll = async (req: Request, res: Response) => {
    const order = await this.orderService.getAll();
    return res.status(200).json(order);
  };
}

export default OrderController;