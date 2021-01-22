import { useContext, useReducer, createContext, useMemo } from 'react';
import cartReducer, { cartState } from './CartReducer';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, dispatch] = useReducer(cartReducer, cartState);
	const value = useMemo(() => {
		return { cart, dispatch };
	}, [cart, dispatch]);
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export const useCart = () => useContext(CartContext);
