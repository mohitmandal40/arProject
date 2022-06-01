import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<NavLink to="/">
				<p>Products</p>
			</NavLink>
			<NavLink to="/demoscript">
				<p>Demo Script</p>
			</NavLink>
			<NavLink to="/customers">
				<p>Customers</p>
			</NavLink>
			<NavLink to="/sales-team">
				<p>Sales Team</p>
			</NavLink>
			<NavLink to="/demo">
				<p> Demos</p>
			</NavLink>
			<NavLink to="/settings">
				<p> Settings</p>
			</NavLink>
		</div>
	);
};

export default Sidebar;
