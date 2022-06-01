import React, { useEffect, useState } from "react";
import UsersList from "../../components/UsersList/UsersList";

const data = [
	{
		id: 1,
		userName: "Suresh K",
		LastSignedIn: "Within 1 hour",
		role: "Owner",
	},
];

const parsedData = JSON.parse(localStorage.getItem("usersList"));
if (!parsedData || parsedData?.length <= 0) {
	localStorage.setItem("usersList", JSON.stringify(data));
}

const Settings = () => {
	const [usersList, setUsersList] = useState();

	const filterUserData = () => {
		const data = [...usersList];
		const ascending = data.sort((a, b) =>
			a?.["userName"]?.localeCompare(b?.["userName"])
		);

		setUsersList(ascending);
	};

	useEffect(() => {
		const usersData = JSON.parse(localStorage.getItem("usersList"));
		setUsersList(usersData);
	}, []);

	const addUserHandler = (data) => {
		setUsersList((prevState) => [...prevState, ...data]);
		const usersData = JSON.parse(localStorage.getItem("usersList"));
		const finalData = [...usersData, ...data];
		localStorage.setItem("usersList", JSON.stringify(finalData));
	};

	const deleteUserHandler = (id) => {
		const transformedUsers = usersList.filter((el) => el?.id !== id);
		setUsersList(transformedUsers);
		const usersData = JSON.parse(localStorage.getItem("usersList"));
		const finalData = usersData.filter((el) => el?.id !== id);
		localStorage.setItem("usersList", JSON.stringify(finalData));
	};

	return (
		<UsersList
			usersListData={usersList}
			deleteUserData={deleteUserHandler}
			addUserHandler={addUserHandler}
			filterUserData={filterUserData}
		/>
	);
};

export default Settings;
