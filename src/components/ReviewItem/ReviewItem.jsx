import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
const ReviewItem = ({product,handleRemoveFronNcart}) => {
const {id,img,name,quantity,price}=product;
 
    return (
        <div className='review-item'>
          <img src={img} alt="" srcset="" /> 
          <div className='review-details'>
            <h2>{name}</h2>
            <p>Price: <span >${price}</span></p>
            <p>Quantity: <span>{quantity}</span></p>
          </div>

          <button onClick={()=> handleRemoveFronNcart(id)}><FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
    );
};

export default ReviewItem;