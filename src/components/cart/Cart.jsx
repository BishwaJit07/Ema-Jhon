import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart);

let total=0;
for(const product of cart){
    total = total +product.price
}
let totalShiping=0;
for(const product of cart){
    totalShiping = totalShiping +product.shipping
}

const tax = total*5/100;
const grandTotal = total+ totalShiping + tax ;
    return (
        <div className='cart'>
             <h3>Order summary</h3>
            <p>Selected Items:{cart.length}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping Charge:$ {totalShiping} </p>
            <p>Tax:{tax.toFixed(2)}</p>
           <h6>Grand Total:{grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;