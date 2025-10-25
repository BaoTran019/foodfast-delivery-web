import { createContext, useState, useContext } from "react";
import { initial_orders } from "../assets/mock_data/orders";
import { order_items } from "../assets/mock_data/order_items";

import { UserContext } from "./UserContext";

export const OrderContext = createContext(null)

const OrderProvider = ({ children }) => {

    const { user } = useContext(UserContext)
    const userId = user.id
    const userName = user.Name

    const [orders, setOrders] = useState(initial_orders)
    const [orderItem, setOrderItem] = useState(order_items)

    const filterOrders = () => {
        return initial_orders.filter(order => order.userId === userId);
    };

    const getOrderItem = (orderId) => {
        return orderItem.filter(item => item.orderId === orderId);
    }

    const addOrder = (newOrder) => {
        const nextId = orders.length > 0
            ? Math.max(...orders.map(o => o.orderId)) + 1
            : 1;

        const orderWithId = {
            ...newOrder, userId: userId, 
            orderId: nextId, status: 'new-orders', date: Date.now()
        };
        setOrders(prev => [...prev, orderWithId]);
    };

    return (
        <OrderContext.Provider value={{ filterOrders, getOrderItem, addOrder }}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderProvider