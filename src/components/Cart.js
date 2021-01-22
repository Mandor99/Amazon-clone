import React from 'react';
import '../styles/Cart.css';
import CartProducts from './CartProducts';
import { useCart } from './features/CartContext';
import SubTotal from './SubTotal';

function Cart() {
	const { cart } = useCart();
	return (
		<main className='cartProducts__main'>
			<section className='cartProducts__items'>
				<figure className='ad'>
					<img
						src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/AMZN_OutletDeals_Template_March_1500x200_wh_EN.jpg'
						alt='advertisement'
						className='ad__img'
					/>
				</figure>
				<section className='cartProducts'>
					{cart.cart?.length !== 0 ? (
						<div>
							<h2 className='cartProduct__title'>your shopping amazon cart</h2>
							{cart.cart.map(({ id, name, price, rate, image }) => (
								<CartProducts
									id={id}
									key={Math.random()}
									rate={rate}
									image={image}
									name={name}
									price={price}
								/>
							))}
						</div>
					) : (
						<h2 className='cartProduct__title cartProduct__title--clear'>
							your amazon cart is empty
						</h2>
					)}
				</section>
			</section>

			{cart.cart?.length > 0 && (
				<section className='cartProducts__totalPrice'>
					<div className='subtotal'>
						<SubTotal />
					</div>
				</section>
			)}
		</main>
	);
}

export default Cart;
