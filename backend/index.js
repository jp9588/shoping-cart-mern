const express = require('express');
require('dotenv').config();
const productRoutes = require('./routes/productRoutes');

const connectDB = require('./config/db');

connectDB();

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Runing at ${PORT}`));
