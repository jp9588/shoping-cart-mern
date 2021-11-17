import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './components.css';
import { removeFromCart } from './redux/actions/cartAction';

const ProductItem = ({ item, qtyChangeHandler }) => {
	const dispatch = useDispatch();

	const removeHandler = (id) => {
		dispatch(removeFromCart(id));
	};

	return (
		<div className="product-item">
			<div className="product-item-img">
				<img src={item.imageUrl} alt="product-img" />
			</div>
			<Link to={`/product/${item.product}`} className="text-link">
				<p>{item.name}</p>
			</Link>
			<p>Price: ${item.price}</p>
			<div>
				<select
					className="product-item-qty"
					value={item.qty}
					onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
				>
					{[ ...Array(item.countInStock).keys() ].map((x) => (
						<option key={x + 1} value={x + 1}>
							{x + 1}
						</option>
					))}
				</select>
				<button className="delete-product-qty" onClick={() => removeHandler(item.product)}>
					<i className="fas fa-trash" />
				</button>
			</div>
		</div>
	);
};

export default ProductItem;
