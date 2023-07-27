import PropTypes from "prop-types";
import { useState } from "react";
import Header from "./Header";
import Name from "./Name";
import Submitconfirm from "./SubmitConfirm";
import "./style.css";
function Message({ name, email }) {
	const [clearScreen, setClearScreen] = useState(false);
	const [messageSubmitted, setMessageSubmitted] = useState(false);
	const [resetForm, setResetForm] = useState(false);
	const [message, setMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const validate = () => {
		return message.length > 0;
	};

	const handleBlur = () => {
		if (!validate()) {
			setErrorMessage("A message is required! ⚠️");
		} else {
			setErrorMessage("");
		}
	};

	const handleChange = (event) => {
		setMessage(event.target.value);
	};

	const handleSubmit = (event) => {
		if (!validate()) {
			event.preventDefault();
			return;
		} else {
			event.preventDefault();
			setClearScreen(true);
			setMessageSubmitted(true);
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
						<span>&nbsp;&nbsp;{name}</span>
					</div>
					<div className="user-info">
						<span className="ion-ios-mail"></span>
						<span>&nbsp;&nbsp;{email}</span>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="form-input">
							<span className="ion-md-create"></span>
							<textarea
								value={message}
								placeholder="Write your message"
								rows="4"
								autoFocus
								onBlur={handleBlur}
								onChange={handleChange}
								onKeyPress={(e) => {
									if (e.key === "Enter") {
										handleSubmit(e);
									}
								}}
							/>
						</div>
						<span className="error-message">{errorMessage}</span>
						<input type="submit" value="Submit" disabled={!validate()} />
						<input type="button" value="Reset" onClick={handleReset} />
					</form>
				</div>
			</div>
		);
	}

	if (messageSubmitted) {
		return <Submitconfirm name={name} email={email} message={message} />;
	}

	if (resetForm) {
		return <Name />;
	}
}

Message.propTypes = {
	name: PropTypes.string,
	email: PropTypes.string,
};
export default Message;
