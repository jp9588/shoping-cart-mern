import { typesProduct, typesProducts } from '../constants/types';

export const getProductsReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case typesProducts.GetProductsRequest:
			return {
				loading: true,
				products: []
			};

		case typesProducts.GetProductsSuccess:
			return {
				loading: false,
				products: action.payload
			};
		case typesProducts.GetProductsFail:
			return {
				loading: false,
				error: action.payload
			};

		default:
			return state;
	}
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
	switch (action.type) {
		case typesProduct.GetProductDetailsRequest:
			return {
				loading: true
			};

		case typesProduct.GetProductDetailsSuccess:
			return {
				loading: false,
				product: action.payload
			};
		case typesProduct.GetProductDetailsFail:
			return {
				loading: false,
				error: action.payload
			};
		case typesProduct.GetProductDetailsReset:
			return {
				product: {}
			};
		default:
			return state;
	}
};
