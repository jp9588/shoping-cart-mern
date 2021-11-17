import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductItem from '../components/ProductItem';
import { addToCart } from '../components/redux/actions/cartAction';

const CartScreen = () => {
	const dispatch = useDispatch();
	const cartValues = useSelector((state) => state.cart);

	const { cartItems } = cartValues;

	const qtyChangeHandler = (id, qty) => {
		dispatch(addToCart(id, qty));
	};

	const getAmountOfProductsOnCart = () => {
		return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
	};

	const getSubTotalPrice = () => {
		return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
	};

	return (
		<div className="contenedor cart">
			<h2 className="cart-title">On Cart !</h2>
			<div className="cart-screen">
				<div className="left-cart-screen">
					{cartItems.length === 0 ? (
						<div>
							{' '}
							Cart Empty <Link to="/">Go Back...</Link>{' '}
						</div>
					) : (
						cartItems.map((item) => (
							<ProductItem key={item.product} item={item} qtyChangeHandler={qtyChangeHandler} />
						))
					)}
				</div>

				<div className="rigth-cart-screen">
					<p>Products on cart ({getAmountOfProductsOnCart()})</p>
					<p>Sub-total: ${getSubTotalPrice()}</p>
					<button>Proceded to Check-Out</button>
				</div>
			</div>
		</div>
	);
};

export default CartScreen;
