import React from "react";
import { NavLink } from "react-router-dom";

const Customers = () => {
	return (
		<>
			<div>Customers Page</div>
			<NavLink to="/settings">Go to Settings</NavLink>
		</>
	);
};

export default Customers;
