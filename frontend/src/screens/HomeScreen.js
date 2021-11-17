import Product from '../components/Product';
import '../App.css';
import './screens.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts as listProducts } from '../components/redux/actions/productActions';

const HomeScreen = () => {
	const dispatch = useDispatch();
	const { products, loading, error } = useSelector((state) => state.getProducts);

	useEffect(
		() => {
			dispatch(listProducts());
		},
		[ dispatch ]
	);
	return (
		<div className="contenedor">
			<h2 className="home-title">our products</h2>

			<div className="home-screen">
				{loading ? (
					<h2>Loading...</h2>
				) : error ? (
					<h2>{error}</h2>
				) : (
					products.map((product) => (
						<Product
							key={product._id}
							_id={product._id}
							name={product.name}
							description={product.description}
							price={product.price}
							imageUrl={product.imageUrl}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default HomeScreen;
