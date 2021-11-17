import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../components/redux/actions/cartAction';
import { getProductDetail } from '../components/redux/actions/productActions';

const ProductScreen = ({ match, history }) => {
	const dispatch = useDispatch();
	const productDetails = useSelector((state) => state.getProductDetails);

	const { loading, error, product } = productDetails;

	const [ qty, setQty ] = useState(1);

	useEffect(
		() => {
			if (product && match.params.id !== product._id) {
				dispatch(getProductDetail(match.params.id));
			}
		},
		[ dispatch, match, product ]
	);

	const addToCartHandler = () => {
		dispatch(addToCart(product._id, qty));
		 history.push("/cart");
	};

	
	return (
		<div className="contenedor product-screen">

			{
				loading ? (<h2>Loading...</h2>): error ? (<h2>{error}</h2>): 
				(
					<>
						<div className="left-product">
							<img src={product.imageUrl} />
							<p>{product.name}</p>
							<p>{product.description}</p>
							<p>
								Price: <span>${product.price}</span>
							</p>
						</div>

			<div className="rigth-product">
				<p>
					Price: <span>${product.price}</span>
				</p>
				<p>
					Status:
					{product.countInStock ? <strong>In Stock: Aviable</strong> : <strong>In Stock: Unaviable</strong>}
				</p>
				<p>
					Quantity:
					<select value={qty} onChange={(e) => setQty(e.target.value)}>
						{[ ...Array(product.countInStock).keys() ].map((x) => (
							<option key={x + 1} value={x + 1}>
								{x + 1}
							</option>
						))}
					</select>
				</p>

				<p>
					<button onClick={addToCartHandler} className="btn-to-cart" type="button">
						Add to cart !
					</button>
				</p>
			</div>
					
					
					
					
					</>
				)
			}
			
		</div>
	);
};

export default ProductScreen;
