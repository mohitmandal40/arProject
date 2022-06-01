import React from "react";
import { NavLink } from "react-router-dom";

const DemoScript = () => {
	return (
		<>
			<div>DemoScripts Page</div>
			<NavLink to="/settings">Go to Settings</NavLink>
		</>
	);
};

export default DemoScript;
