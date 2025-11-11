// lib/getOrders.ts
import { initial_orders } from "@/assets/mock_data/orders";

export const getOrdersByUser = (userId: string) => {
  return initial_orders.filter(order => order.userId === userId);
};
