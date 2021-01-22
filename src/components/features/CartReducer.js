export const getSubTotal = (cart) => {
	return cart?.reduce((total, product) => product.price + total, 0);
};
export const cartState = {
	cart: [],
	user: null,
};
const cartReducer = (state, action) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};
		// break;
		case 'ADD':
			return {
				...state,
				cart: [...state.cart, action.product],
			};
		// break;
		case 'REMOVE':
			const newCart = state.cart.filter((product) => product.id !== action.id);
			// console.log(newCart);
			// console.log(action.id);
			// const newCart = [...state.cart];
			// const index = state.cart.findIndex((item) => item.id === action.id);
			// index >= 0 ? newCart.splice(index, 1) : console.warn('not exist');
			return {
				...state,
				cart: newCart,
			};
		// break;
		default:
			return { state };
		// break;
	}
};

export default cartReducer;
