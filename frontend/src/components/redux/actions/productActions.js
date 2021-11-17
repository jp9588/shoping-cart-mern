import axios from 'axios';
import { typesProduct, typesProducts } from '../constants/types';

export const getProducts = () => async (dispatch) => {
	try {
		dispatch({
			type: typesProducts.GetProductsRequest
		});

		const { data } = await axios.get('/api/products');

		dispatch({
			type: typesProducts.GetProductsSuccess,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: typesProducts.GetProductsFail,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		});
	}
};

export const getProductDetail = (id) => async (dispatch) => {
	try {
		dispatch({
			type: typesProduct.GetProductDetailsRequest
		});

		const { data } = await axios.get(`/api/products/${id}`);

		dispatch({
			type: typesProduct.GetProductDetailsSuccess,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: typesProduct.GetProductDetailsFail,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		});
	}
};

export const removeProductDetails = () => (dispatch) => {
	dispatch({
		type: typesProduct.GetProductDetailsReset
	});
};
