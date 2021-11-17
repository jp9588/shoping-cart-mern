import axios from 'axios';
import { typesCart } from '../constants/types';

export const addToCart = (id, qty) => async (dispatch, getState) => {
	const { data } = await axios.get(`/api/products/${id}`);

	dispatch({
		type: typesCart.AddtoCart,
		payload: {
			product: data._id,
			name: data.name,
			imageUrl: data.imageUrl,
			price: data.price,
			countInStock: data.countInStock,
			qty
		}
	});

	localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
	dispatch({
		type: typesCart.RemovetoCart,
		payload: id
	});
	localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};
