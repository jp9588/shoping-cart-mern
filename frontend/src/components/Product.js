import { Link } from 'react-router-dom';
import './components.css';

const Product = ({ name, description, price, imageUrl, _id }) => {
	return (
		<div className="product">
			<img src={imageUrl} alt="img" />

			<div className="product-info">
				<h4>{name}</h4>
				<p className="nombre-producto">{name}</p>
				<p className="info-descripcion">{description}</p>
				<p>
					<span>${price}</span>
				</p>
				<Link to={`/product/${_id}`} className="info-button">
					View
				</Link>
			</div>
		</div>
	);
};

export default Product;
