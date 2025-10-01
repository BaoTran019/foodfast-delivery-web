import { createContext, useState } from 'react'

export const CartContext = createContext();

function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([])

    const addToCart = (food, quantity) => {
        setCartItems(prev => {
            // Check if item is existed
            const existing = prev.find(item => item.id === food.id);
            if (existing) {
                // If existed -> increase quantity
                return prev.map(item =>
                    item.id === food.id
                        ? {
                            ...item, quantity: item.quantity + quantity
                        } : item
                );
            } else {
                return [...prev, { ...food, quantity }];
            }
        });
    };

    // Tăng giảm số lượng
    const updateQuantity = (id, delta) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
            )
        );
    };

    const removeFromCart = (foodId) => {
        setCartItems(prev => prev.filter(item => item.id !== foodId));
    };

    const removeAllItems = () => setCartItems([])

    const getSubTotal = (price, quantity) => price * quantity;

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, updateQuantity, removeFromCart, getSubTotal, removeAllItems }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
