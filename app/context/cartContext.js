"use client";

import { createContext, useState, useEffect } from 'react';
import {collection, getDocs, addDoc } from "firebase/firestore";
import db from "./firebaseConfig";
import { products } from "../data/product";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
// Carga de productos a firebase
const agregarProductos = () => {
    products.forEach((
      addDoc(collection(db, "products"), products)
    ))
}
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
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, calculateTotal, agregarProductos }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;