import { typesCart } from '../constants/types';

export const cartReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case typesCart.AddtoCart:
			const item = action.payload;
			//check if item exist in the cart if dont added
			const existItem = state.cartItems.find((x) => x.product === item.product);
			if (existItem) {
				return {
					...state,
					cartItems: state.cartItems.map((x) => (x.product === existItem.product ? item : x))
				};
			} else {
				return {
					...state,
					cartItems: [ ...state.cartItems, item ]
				};
			}
		case typesCart.RemovetoCart:
			return {
				...state,
				cartItems: state.cartItems.filter((x) => x.product !== action.payload)
			};
		default:
			return state;
	}
};
