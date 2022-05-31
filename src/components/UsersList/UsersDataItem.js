import React from "react";
import trash from "../../assets/trash.png";
import "./styles.scss";

const UsersDataItem = ({ usersData, deleteUserData }) => {
	return (
		<thead>
			{usersData.map((el, idx) => (
				<tr key={idx}>
					<td>{idx + 1}</td>
					<td>{el?.userName}</td>
					<td>{el?.LastSignedIn}</td>
					<td>{el?.role}</td>
					<td>
						<img
							className="delete"
							src={trash}
							alt="trash"
							onClick={deleteUserData.bind(null, el?.id)}
						/>
					</td>
				</tr>
			))}
		</thead>
	);
};

export default UsersDataItem;
