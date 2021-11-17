import React from 'react';
import './components.css';

const BackDrop = ({ show, click }) => {
	return show && <div className="backdrop" onClick={click} />;
};

export default BackDrop;
