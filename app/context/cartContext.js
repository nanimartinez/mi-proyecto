"use client";

import { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
          setCart(JSON.parse(storedCart));
      }
  }, []);

  useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

    const addToCart = (product) => {
        const existingProduct = cart.find((item) => item.name === product.name);
        if (existingProduct) {
            setCart(
              cart.map((item) =>
                item.name === product.name
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            );
          } else {
            setCart([...cart, { ...product, quantity: 1 }]);
          }
      };
    
      const removeFromCart = (productName) => {
        setCart(cart.filter((item) => item.name !== productName));
      };
    
      const updateQuantity = (productName, newQuantity) => {
        setCart(
          cart.map((item) =>
            item.name === productName
              ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 }
              : item
          )
        );
      };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;