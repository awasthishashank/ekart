import React, { createContext, useState } from 'react';

const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export default CartContext;
