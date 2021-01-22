import React from 'react';
import '../styles/CartProducts.css';
import {useCart} from './features/CartContext';

function CartProducts({id, name, image, price, rate}) {
    const {dispatch} = useCart()
    const removeProduct = () => {
        dispatch({
            type: 'REMOVE',
            id: id
        })
    }
	return (
        <section className="cartProducts">
            <div className="cartProductWrapper">
                <figure className="cartProduct__pic">
                    <img src={image} alt="your product" className="cartProduct__img"/>
                </figure>
                <div className="cartProduct__info">
                    <h3 className="cartProduct__name">{name}</h3>
                    <p className="cartProduct__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="cartProduct__rateWrapper">
                    {
                        Array(rate).fill().map( _ => (<p key={Math.random()} className="cartProduct__rate">⭐</p>))
                    }
                    </div>
                    <button onClick={removeProduct} className="btn-main cartProduct__btn">remove from cart</button>

                </div>
            </div>
        </section>
    )
}

export default CartProducts;
