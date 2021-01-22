import React from 'react';
import '../styles/Products.css';
import {useCart} from './features/CartContext';

function Products({id, name, price, image, rate}) {
    const star = '⭐'
    const {dispatch} = useCart()
    const addProduct = () => {
        dispatch({
            type: 'ADD',
            product: {
                id: id,
                name: name,
                price: price,
                image: image,
                rate:rate
            }
        })
    }
	return (
		<div className='product'>
            <h3 className='product__name'>{name}</h3>
            <p className="product__price">
                <small>$ </small>
                <strong>{price}</strong>
            </p>
            <div className="product__rateWrapper">
                {
                    Array(rate).fill().map( _ => (<p key={Math.random()} className="product__rate">{star}</p>))
                }
            </div>
            <img className="product__pic" src={image} alt="product"/>
            <button onClick={addProduct} className="btn-main product__btn">add to cart</button>
		</div>
	);
}

export default Products;
