import React, { useEffect, useRef, useState } from "react";
import ReactDom from "react-dom";

import "./styles.scss";
import userImg from "../../assets/user.png";

const Modal = ({ showModal, closeModal, addUserData }) => {
	const [returnContent, setReturnContent] = useState(false);
	const [email, setEmail] = useState("");
	const [selectedValue, setSelectedValue] = useState("Admin");

	const timerRef = useRef();

	useEffect(() => {
		if (showModal) {
			setReturnContent(showModal);
		} else {
			clearTimeout(timerRef.current);
			timerRef.current = setTimeout(() => {
				setReturnContent(showModal);
			}, 300);
		}

		return () => {
			clearTimeout(timerRef.current);
		};
	}, [showModal]);

	const emailHandler = (e) => {
		setEmail(e.target.value);
	};

	const selectHandler = (e) => {
		setSelectedValue(e.target.value);
	};

	const addUserHandler = () => {
		if (email?.trim() === "" || selectedValue?.trim() === "") {
			alert("Error, email should not be empty");
		} else {
			const userData = {
				id: new Date().getTime(),
				userName: email,
				LastSignedIn: `Within ${Math.round(Math.random() * 5 + 1)} hour`,
				role: selectedValue,
			};
			addUserData([userData]);
			setEmail("");
			closeModal();
		}
	};

	const closeModalHandler = () => {
		closeModal();
		setEmail("");
	};

	const modal = (
		<>
			<div className="backdrop" onClick={closeModalHandler}></div>
			<div className={`modal ${showModal ? "showmodal" : "hidemodal"}`}>
				<div className="modal__left">
					<div className="modal__left__img">
						<img src={userImg} alt="userImg" />
					</div>
					<div className="modal__left__text">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</div>
				</div>
				<div className="modal__right">
					<h2>User Information</h2>
					<div className="modal__right__email">
						<label htmlFor="email">Email Id of User</label>
						<input
							type="text"
							name="email"
							id="email"
							value={email}
							onChange={emailHandler}
						/>
					</div>

					<div className="modal__right__role">
						<label htmlFor="role">Role</label>
						<select
							id="role"
							name="role"
							onChange={selectHandler}
							value={selectedValue}
						>
							<option value="Admin">Admin</option>
							<option value="Owner">Owner</option>
							<option value="Sales">Sales</option>
						</select>
					</div>
					<div className="modal__right__button">
						<button
							className="modal__right__button__cancel"
							onClick={closeModalHandler}
						>
							Cancel
						</button>
						<button
							className="modal__right__button__add"
							onClick={addUserHandler}
						>
							Add
						</button>
					</div>
				</div>
			</div>
		</>
	);

	if (returnContent) {
		return ReactDom.createPortal(modal, document.getElementById("portal"));
	} else {
		return null;
	}
};

export default Modal;
