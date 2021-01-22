import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import { useCart } from './components/features/CartContext';
import { auth } from './components/firebase/Firebase';
import react, { useEffect } from 'react';
import Footer from './components/Footer';

function App() {
	const { cart, dispatch } = useCart();
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			authUser
				? dispatch({
						type: 'SET_USER',
						user: authUser,
				  })
				: dispatch({
						type: 'SET_USER',
						user: null,
				  });
		});
		return () => {
			unsubscribe();
		};
	}, [cart.user]);
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route exact path='/'>
						<Navbar />
						<Home />
						<Footer />
					</Route>
					<Route path='/login'>
						<LogIn />
					</Route>
					<Route path='/Cart'>
						<Navbar />
						<Cart />
						{/*<Footer />*/}
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
