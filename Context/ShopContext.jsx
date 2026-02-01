import React, { createContext, useEffect, useState } from "react";
import { productsData } from "../data";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [products] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      const price = parseFloat(item.price);
      return isNaN(price) ? acc : acc + price * item.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  useEffect(() => {
    const amount = cart.reduce((acc, item) => acc + item.amount, 0);
    setQuantity(amount);
  }, [cart]);

  const addToCart = (product, id) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, amount: item.amount + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
    }
    toast.success("Product added to cart");
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.success("Product removed successfully");
  };

  const clearCart = () => {
    setCart([]);
    toast.success("Cart empty");
  };

  const increaseQuantity = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) addToCart(cartItem, id);
  };

  const decreaseQuantity = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (!cartItem) return;

    if (cartItem.amount > 1) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, amount: item.amount - 1 } : item
        )
      );
    } else {
      removeFromCart(id);
    }
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        quantity,
        total,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
