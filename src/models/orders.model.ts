import { Pool } from 'mysql2/promise';
import Order from '../interfaces/orders.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.connection.execute(
      `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds FROM Trybesmith.Orders AS o
       INNER JOIN Trybesmith.Products AS p ON o.id = p.orderId
       GROUP BY o.id
       ORDER BY o.userId`,
    );
    const [rows] = result;
    return rows as Order[];
  }
}