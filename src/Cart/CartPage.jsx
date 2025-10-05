import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./CartPage.css";
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";
import { toast, Bounce } from "react-toastify";

const itemRemoveMessage = (itemName) => (
  <div>
    Đã xóa <span style={{ color: '#ff8c09' }}>{itemName}</span> khỏi giỏ hàng.
  </div>
);

function CartPage() {

  const { cartItems, updateQuantity, removeFromCart, removeAllItems } = useContext(CartContext)

  const handleRemoveItem = (item) => {
    removeFromCart(item.id)
    toast.warning(itemRemoveMessage(item.name))
  }

  const handleRemoveAll = () => {
    removeAllItems();
    if (cartItems.length === 0) {
      toast.warning('Giỏ hàng chưa có món ăn')
    }
    else {
      toast.warning('Đã xóa tất cả khỏi giỏ hàng')
    }
  }

  const handleQty = (id, delta) => {
    updateQuantity(id, delta)
  }

  const handleWarning = () => toast.error('Giỏ hảng bạn chưa có món ăn')

  // Get Total
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  console.log("Cart list", cartItems)

  return (
    <div className="cart-page">
      <div className="cart-container" style={{ marginTop: '4vh' }}>
        <h2 className="cart-title">🛒 Giỏ hàng của bạn</h2>

        {cartItems.length === 0 ? (
          <p>Giỏ hàng đang trống.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-img" />
                <div className="cart-info">
                  <h4>{item.name}</h4>
                  <p>{new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(item.price)}</p>
                  <div className="qty-controls">
                    <button onClick={() => handleQty(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQty(item.id, 1)}>+</button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveItem(item)}
                  >
                    Xóa
                  </button>
                </div>
                <div className="cart-subtotal">
                  {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(item.price * item.quantity)}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="cart-summary">
          <h3>Tổng cộng:  {" "}
            <span style={{ color: '#ff8800ff', fontWeight: 'bold' }}>
              {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(total)}
            </span>
          </h3>
          <Button className="remove-all-btn" onClick={handleRemoveAll}>Xóa tất cả</Button>
          <Button as={NavLink} to="/menu" className="cart-summary__btn-continue" onClick={() => window.scrollTo(0, 0)}>Tiếp tục chọn món</Button>
          {cartItems.length !== 0 ? (
            <Button as={NavLink} to="/checkout" className="cart-summary__btn-checkout">Thanh toán</Button>)
            : (<Button className="cart-summary__btn-checkout" onClick={handleWarning}>Thanh toán</Button>)}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
