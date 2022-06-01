import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./styles.scss";

const MainContent = () => {
	return (
		<div className="main">
			<div className="main__sidebar">{<Sidebar />}</div>
			<div className="main__tableContent">
				<Outlet />
			</div>
		</div>
	);
};

export default MainContent;
