import React from 'react'
import '../styles/SubTotal.css'
import CurrencyFormat from 'react-currency-format'
import {useCart} from './features/CartContext'
import {getSubTotal} from './features/CartReducer'

function SubTotal() {
    const {cart} = useCart()
    return (
        <section className="subTotal">
            <CurrencyFormat
                value={getSubTotal(cart.cart)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
                renderText={(value) => (
                    <>
                        <p className="subTotalPrice">
                            Subtotal ({cart.cart.length} items): <strong>{value}</strong>
                        </p>
                        <div className="subTotalGift">
                            <input type="checkbox" name="gift" id="gift"/>
                            <small> This order contains a gift</small>
                        </div>
                    </>
                )}
            />
            <button className="btn-main subTotal__btn">proceed to checkout</button>
        </section>
    )
}

export default SubTotal
