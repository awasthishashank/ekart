import React, { useContext } from 'react';
import CartContext from '../../store/CartContext';

const CartSections = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <h2>CART</h2>
      <button className="cancel">X</button>
      <div className="cart-row cart-header">
        <span className='cart-item cart-column'>ITEM</span>
        <span className='cart-price cart-column'>PRICE</span>
        <span className='cart-quantity cart-column'>QUANTITY</span>
      </div>
      <div className='cart-items'>
        {cartItems.map((item, index) => (
          <div className="cart-row" key={index}>
            <span className='cart-item cart-column'>{item.title}</span>
            <span className='cart-price cart-column'>{item.price}</span>
            <span className='cart-quantity cart-column'>{item.quantity}</span>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <span>
          <span className='total-title'><strong>Total</strong></span>
          $<span id='total-value'>0</span>
        </span>
      </div>
      <button className='purchase-btn' type='button'>PURCHASE</button>
    </>
  );
}

export default CartSections;
