import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartProductsLoader from "../../Loaders/CartProductsLoaders";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import './Order.css'

const Orders = () => {

  const savedCart = useLoaderData();
  const [cart, setCart] =useState(savedCart);

  const handleRemoveFromNcart = (id)=>{
     const remaining = cart.filter(product =>product.id !== id);
        setCart(remaining);
        removeFromDb(id);
  }

  return (
    <div className="shop-container">
      <div className="review-Container">
       {
        cart.map(product=> <ReviewItem
        key={product.id} product={product} handleRemoveFronNcart={handleRemoveFromNcart}></ReviewItem>)
       }
      </div>
      <div className='order-cart'>
        <Cart cart={cart} ></Cart>
      </div>
    </div>
  );
};

export default Orders;
