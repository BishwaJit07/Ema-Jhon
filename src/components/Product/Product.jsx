import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const{img,name,price,ratings,seller,quantity}= props.product;
const handleAddedtoCart = props.handleAddedtoCart;
   
    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className='product-info'>
           <h3 className='product-name'>{name}</h3>
           <p>Price:${price}</p> <br></br>
           <p>Manufacturer: {seller}</p>
           <p>Rating: {ratings}</p>
           </div>
           <button onClick={()=> handleAddedtoCart(props.product)} className='btn-cart'>Add to Cart<FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;