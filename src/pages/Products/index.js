import React from "react";
import { NavLink } from "react-router-dom";

const Product = () => {
	return (
		<>
			<div>Products Page</div>
			<NavLink to="/settings">Go to Settings</NavLink>
		</>
	);
};

export default Product;
