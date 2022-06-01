import React from "react";
import { NavLink } from "react-router-dom";

const Demo = () => {
	return (
		<>
			<div>Demos Page</div>
			<NavLink to="/settings">Go to Settings</NavLink>
		</>
	);
};

export default Demo;
