import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<ul>
				<li>
					<NavLink to="/products">Products</NavLink>
				</li>
				<li>
					<NavLink to="/demoscript">Demo Script</NavLink>
				</li>
				<li>
					<NavLink to="/customers">Customers</NavLink>
				</li>
				<li>
					<NavLink to="/sales">Sales Team</NavLink>
				</li>
				<li>
					<NavLink to="/demos">Demos</NavLink>
				</li>

				<NavLink className="active" to="/settings">
					Settings
				</NavLink>
			</ul>
		</div>
	);
};

export default Sidebar;
