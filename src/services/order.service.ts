import connection from '../models/connection';
import OrderModel from '../models/orders.model';
import Order from '../interfaces/orders.interface';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    return this.model.getAll();
  }
}

export default OrderService;