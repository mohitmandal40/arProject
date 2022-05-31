import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import UsersDataItem from "./UsersDataItem";
import UsersDataHeading from "./UsersDataHeading";
import Modal from "../Modal/Modal";

const UsersList = ({
	usersListData,
	deleteUserData,
	addUserHandler,
	filterUserData,
}) => {
	const [showModal, setShowModal] = useState(false);
	const el = useRef(null);

	const closeModalHandler = () => {
		setShowModal(false);
	};

	const showModalHandler = () => {
		setShowModal((prevState) => !prevState);
	};

	const scrollToBottom = () => {
		el?.current?.scrollIntoView({
			block: "end",
			behavior: "smooth",
			inline: "nearest",
		});
	};

	useEffect(() => {
		scrollToBottom();
	}, [usersListData]);

	return (
		<>
			<button className="button" onClick={showModalHandler}>
				Add User
			</button>
			<Modal
				showModal={showModal}
				closeModal={closeModalHandler}
				addUserData={addUserHandler}
			/>
			<div style={{ height: "400px", overflow: "scroll" }}>
				{usersListData?.length ? (
					<table ref={el}>
						<UsersDataHeading filterUserData={filterUserData} />
						<UsersDataItem
							usersData={usersListData}
							deleteUserData={deleteUserData}
						/>
					</table>
				) : (
					<p>No data Found</p>
				)}
			</div>
		</>
	);
};

export default UsersList;
