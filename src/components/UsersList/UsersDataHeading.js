import React from "react";

const UsersDataHeading = ({ filterUserData }) => {
	return (
		<thead>
			<tr className="thead">
				<th>#</th>
				<th onClick={() => filterUserData()}>User</th>
				<th>Last Signed in</th>
				<th>Role</th>
				<th> </th>
			</tr>
		</thead>
	);
};

export default UsersDataHeading;
