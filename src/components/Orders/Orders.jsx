import React from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CartProductsLoader from "../../Loaders/CartProductsLoaders";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import './Order.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrashCan,faCreditCard } from '@fortawesome/free-solid-svg-icons'
  
const Orders = () => {

  const savedCart = useLoaderData();
  const [cart, setCart] =useState(savedCart);

  const handleRemoveFromNcart = (id)=>{
     const remaining = cart.filter(product =>product.id !== id);
        setCart(remaining);
        removeFromDb(id);
  }

  const handleClearCart =()=> {
    setCart([]);
    deleteShoppingCart();
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
        <Cart cart={cart} handleClearCart={handleClearCart}>

          <Link to='/chekOut'><button className='procced-cart'>Proceed Checkout <FontAwesomeIcon icon={faCreditCard} /></button></Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
