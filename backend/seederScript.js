require('dotenv').config();

const products = require('./data/products');

const connectDB = require('./config/db');

const Product = require('./models/Product');

connectDB();

const importData = async () => {
	try {
		// await Product.deleteMany({});

		await Product.insertMany(products);

		console.log('Data Import Success');

		process.exit();
	} catch (error) {
		console.error('Error with data Import');
		console.log(error);
		process.exit(1);
	}
};

importData();
