import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Cart = (props) => {

    const {cart, price, shipping, tax, grandTotal} = props;
    return (
        <div id='orderSummery' className='break-words px-6 py-12 pt-7 rounded-lg sticky top-6'>

            <h1 className=' text-2xl text-center font-medium mb-12'>Order Summery</h1>
            <h3 className=' text-lg font-medium mb-4'>Selected Items: {cart.length}</h3>
            <h3 className=' text-lg font-medium mb-4'>Total Price: $ {price}</h3>
            <h3 className=' text-lg font-medium mb-4'>Total Shipping Charge: $ {shipping}</h3>
            <h3 className=' text-lg font-medium mb-4'>Tax: $ {parseFloat(tax).toFixed(2)}</h3>
            <h3 className=' text-xl font-medium mb-4 mt-12'>Grand Total: $ {parseFloat(grandTotal).toFixed(2)}</h3>
                
            <div className='flex flex-col justify-center items-center'>
                <button id='clearCart'>Clear Cart <FontAwesomeIcon icon={faTrashCan} /></button>
                <button id='orderReview'>Order Review <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    );
};

export default Cart;