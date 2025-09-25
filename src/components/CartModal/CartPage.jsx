import React, { useState } from "react";
import "./CartPage.css";
import combo2 from "../../assets/menu/combo_2_mieng_ga_gion.jpg";
import ga1 from "../../assets/menu/1_mieng_ga_gion.jpg";

function CartPage() {
  // Giỏ hàng mẫu
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Combo Gà giòn - 2 miếng", price: 55000, qty: 1, img: combo2 },
    { id: 2, name: "1 miếng gà giòn", price: 35000, qty: 2, img: ga1 },
  ]);

  // Tăng giảm số lượng
  const updateQty = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  // Xóa món ăn
  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  // Tính tổng tiền
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2 className="cart-title">🛒 Giỏ hàng của bạn</h2>

        {cartItems.length === 0 ? (
          <p>Giỏ hàng đang trống.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.img} alt={item.name} className="cart-img" />
                <div className="cart-info">
                  <h4>{item.name}</h4>
                  <p>{item.price.toLocaleString()} VND</p>
                  <div className="qty-controls">
                    <button onClick={() => updateQty(item.id, -1)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)}>+</button>
                  </div>
                  <button 
                    className="remove-btn" 
                    onClick={() => removeItem(item.id)}
                  >
                    Xóa
                  </button>
                </div>
                <div className="cart-subtotal">
                  {(item.price * item.qty).toLocaleString()} VND
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="cart-summary">
          <h3>Tổng cộng: {total.toLocaleString()} VND</h3>
          <button className="checkout-btn">Tiếp tục đặt hàng</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
