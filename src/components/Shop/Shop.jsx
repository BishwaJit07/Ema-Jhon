import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';
import './shop.css'

import Cart from '../cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Shop = () => {
const[products,setProducts]= useState([]);
const [cart,setCart]=useState([]);

useEffect(()=>{

    fetch('products.json')
    .then (res=> res.json())
    .then (data=>setProducts(data))
},[]);

useEffect(()=>{
const storeCart = getShoppingCart();
const savedCart =[];

for (const id in storeCart){
   
    const addedProduct = products.find(product=> product.id===id);
    
    if(addedProduct){
        const quantity = storeCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct)
    }
}
setCart(savedCart);
},[products])




const handleAddedtoCart= (product)=>{
    let newCart = [];
        // const newCart = [...cart, product];
        // if product doesn't exist in the cart, then set quantity = 1
        // if exist update quantity by 1
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id)
    }

    const handleClearCart=()=> {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            
            <div className='products-container'>
        {
            products.map(product=> <Product key={product.id} product={product} handleAddedtoCart={handleAddedtoCart}></Product>)
        }
            </div>

            <div className='cart-container'>
          <Cart cart={cart} handleClearCart={handleClearCart}>  <Link to='/order' >
          <button className='procced-cart'>Review Order <FontAwesomeIcon icon={faArrowRight}  /></button></Link>
          </Cart>

            </div>

        </div>
    );
};

export default Shop;