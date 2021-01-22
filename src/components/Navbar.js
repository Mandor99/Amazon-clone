import React from 'react';
import '../styles/Navbar.css';
import logo from '../images/amazon-logo-white.png';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart } from '@material-ui/icons';
import { useCart } from './features/CartContext';
import { auth } from './firebase/Firebase';

function Navbar() {
	const { cart } = useCart();
	const signOut = () => {
		if (cart.user) {
			return auth.signOut();
		}
	};
	return (
		<nav className='nav'>
			<Link to='/'>
				<img src={logo} alt='amazon logo' className='nav__logo' />
			</Link>
			<div className='nav__searchWrapper'>
				<input type='text' name='search' className='nav__search' />
				<Search className='nav__searchIcon' />
			</div>
			<div className='nav__links'>
				<Link to={!cart.user && '/login'} className='nav__link'>
					<div onClick={signOut} className='nav__linkWrapper'>
						<small className='nav__link--small'>hello, amazony</small>
						<h4 className='nav__link--big'>
							{cart.user ? 'Sign Out' : 'Sign In'}
						</h4>
					</div>
				</Link>
				<Link to='/login' className='nav__link'>
					<div className='nav__linkWrapper'>
						<small className='nav__link--small'>returns</small>
						<h4 className='nav__link--big'>orders</h4>
					</div>
				</Link>
				<Link to='/cart' className='nav__link'>
					<div className='nav__linkWrapper nav__linkWrapper--items'>
						<ShoppingCart variant='Outlined' className='nav__cart' />
						<span className='nav__cartCount'>{cart.cart?.length}</span>
					</div>
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
