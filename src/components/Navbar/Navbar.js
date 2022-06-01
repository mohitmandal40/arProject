import React from "react";
import "./styles.scss";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar__logo">
				<div className="navbar__logo__img">
					<img
						src="https://d3v0px0pttie1i.cloudfront.net/uploads/user/logo/6596401/bf521a30.png"
						alt="logo"
					/>
				</div>
				<div className="navbar__logo__application">
					My Application
					<span className="navbar__profile__icon__dropdown"></span>
				</div>
			</div>
			<div className="navbar__profile">
				<div className="navbar__profile__icon">
					<img
						src="https://d3v0px0pttie1i.cloudfront.net/uploads/user/avatar/6596401/5e6bf78b.jpeg"
						alt="profilePic"
					/>
				</div>
				<div>
					Suresh K <span className="navbar__profile__icon__dropdown"></span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
