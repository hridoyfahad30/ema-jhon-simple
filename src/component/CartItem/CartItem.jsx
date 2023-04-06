import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './CartItem.css'

const CartItem = ({cart, removeReviewItem}) => {
    console.log(cart);

    const {id, name, img, price, quantity} = cart;

    return (
        <div>
            <div className='itemContainer flex justify-between items-center gap- border-2 rounded-2xl border-slate-400 p-4'>
                    <div className='flex justify-between items-center'>
                            <img className='cartImage mr-5 rounded-lg' src={img} alt="" />
                        
                        <div>
                            <h3 className='text-2xl font-medium'>{name}</h3>
                            <p className='text-lg font-medium'>Price: <small className='text-amber-500'> ${price}</small></p>
                            <p className='text-lg font-medium'>Order Quantity: <small  className='text-amber-500'> {quantity}</small></p>
                        </div>
                    </div>
                    <div className='ml-5 mr-2'>
                        <button onClick={()=>removeReviewItem(id)}><FontAwesomeIcon icon={faTrashCan} style={{color: "#eb5757",fontSize: '30px', backgroundColor: 'rgba(235, 87, 87, 0.3)', padding: '20px', borderRadius: '100px'}} /></button>
                    </div>
                </div>
        </div>
    );
};

export default CartItem;