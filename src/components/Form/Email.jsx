import PropTypes from "prop-types";
import { useState } from "react";
import Header from "./Header";
import Message from "./Message";
import Name from "./Name";
import "./style.css";

const Email = ({ name }) => {
	const [clearScreen, setClearScreen] = useState(false);
	const [emailSubmitted, setEmailSubmitted] = useState(false);
	const [resetForm, setResetForm] = useState(false);
	const [email, setEmail] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const validate = () => {
		return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
	};

	const handleBlur = () => {
		if (!validate()) {
			setErrorMessage("valid email address is required! ⚠️");
		} else {
			setErrorMessage("");
		}
	};

	const handleChange = (event) => {
		setEmail(event.target.value);
	};

	const handleSubmit = (event) => {
		if (!validate()) {
			event.preventDefault();
			return;
		} else {
			event.preventDefault();
			setClearScreen(true);
			setEmailSubmitted(true);
		}
	};

	const handleReset = () => {
		setClearScreen(true);
		setResetForm(true);
	};

	if (!clearScreen) {
		return (
			<div>
				<Header />
				<div className="form-container">
					<div className="user-info">
						<span className="ion-ios-person"></span>
						<span className="user-info">&nbsp;&nbsp;{name}</span>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="form-input">
							<span className="ion-ios-mail"></span>
							<input
								type="email"
								value={email}
								placeholder="Enter Email here : johndoe@bmail.com"
								autoFocus={true}
								onBlur={handleBlur}
								onChange={handleChange}
							/>
						</div>
						{!email && <span className="error-message">{errorMessage}</span>}
						<input type="submit" value="Next" disabled={!validate()} />
						<input type="button" value="Reset" onClick={handleReset} />
					</form>
				</div>
			</div>
		);
	}

	if (emailSubmitted) {
		return <Message name={name} email={email} />;
	}

	if (resetForm) {
		return <Name />;
	}
};

Email.propTypes = {
	name: PropTypes.string,
};

export default Email;
