import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './components.css';

const NavBar = ({ click }) => {
	const cartValues = useSelector((state) => state.cart);
	const { cartItems } = cartValues;

	const getAmountOfProductsOnCart = () => {
		return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
	};

	return (
		<nav className="navbar">
			<div className="logo-nav">
				<h3>MERN ShopCart</h3>
			</div>

			<ul className="links-nav">
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

			<div className="hamburger-menu" onClick={click}>
				<div />
				<div />
				<div />
			</div>
		</nav>
	);
};

export default NavBar;
