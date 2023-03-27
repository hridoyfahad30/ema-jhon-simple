import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {category, id, img, name, price, quantity, ratings, ratingsCount, seller, shipping, stock} = (props.product);
    
    const addToCart = props.addToCart;

    return (
        <div>
            <div className="card w-96 bg-base-500 shadow-xl">
                <div className='p-2'>
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 title={name} className="card-title truncate">{name}</h2>
                        <p className=' text-xl mb-12'>Price: ${price}</p>
                        <p>Manufacturer: {seller}</p>
                        <p>Rating: {ratings}</p>
                    </div>
                    
                </div>
                    <div className="card-actions justify-end">
                        <button onClick={()=> addToCart(props.product)} className="cardBuyButton w-full font-medium">Add to Cart <FontAwesomeIcon icon={faCartPlus} /> </button>
                    </div>
            </div>
        </div>
    );
};

export default Product;