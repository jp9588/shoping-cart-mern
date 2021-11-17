import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './components.css';

const SideDrawer = ({ show, click }) => {
	const sideClass = [ 'sidedrawer' ];

	if (show) {
		sideClass.push('show');
	}

	const cartValues = useSelector((state) => state.cart);
	const { cartItems } = cartValues;

	const getAmountOfProductsOnCart = () => {
		return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
	};
	return (
		<div className={sideClass.join(' ')} onClick={click}>
			<ul className="links-side">
				<li>
					<Link to="/cart">
						<i className="fas fa-shopping-cart" />
						<span>{getAmountOfProductsOnCart()}</span>
					</Link>
				</li>
				<li>
					<Link to="/">Shop</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideDrawer;
