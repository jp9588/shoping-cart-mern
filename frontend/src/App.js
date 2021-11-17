import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './normalize.css';
import './App.css';
import NavBar from './components/NavBar';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import BackDrop from './components/BackDrop';
import SideDrawer from './components/SideDrawer';

export const App = () => {
	const [ showToogle, setShowToogle ] = useState(false);

	return (
		<div>
			<Router>
				<NavBar click={() => setShowToogle(true)} />
				<BackDrop show={showToogle} click={() => setShowToogle(false)} />
				<SideDrawer show={showToogle} click={() => setShowToogle(false)} />

				<Switch>
					<Route exact path="/" component={HomeScreen} />

					<Route exact path="/product/:id" component={ProductScreen} />

					<Route exact path="/cart" component={CartScreen} />
				</Switch>
			</Router>
		</div>
	);
};
