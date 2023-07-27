import { useState } from "react";
import Email from "./Email";
import Header from "./Header";
import "./style.css";
const Name = () => {
	// const [displayHeader, setDisplayHeader] = useState(true);
	const [clearScreen, setClearScreen] = useState(false);
	const [nameSubmitted, setNameSubmitted] = useState(false);
	const [name, setName] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const validate = () => {
		return name.length > 0;
	};

	const handleBlur = () => {
		if (!validate()) {
			setErrorMessage("name is required! ⚠️");
		} else {
			setErrorMessage("");
		}
	};

	const handleChange = (event) => {
		setName(event.target.value);
	};

	const handleSubmit = (event) => {
		if (!validate()) {
			event.preventDefault();
			return;
		} else {
			event.preventDefault();
			setClearScreen(true);
			setNameSubmitted(true);
		}
	};

	if (!clearScreen) {
		return (
			<div>
				<Header />
				<div className="form-container">
					<form onSubmit={handleSubmit}>
						<div className="form-input">
							<span className="ion-ios-person"></span>
							<input
								type="text"
								value={name}
								placeholder="Enter Name Here : John Doe"
								onBlur={handleBlur}
								onChange={handleChange}
							/>
						</div>
						{!name && <span className="error-message">{errorMessage}</span>}
						<input type="submit" value="Next" disabled={!validate()} />
					</form>
				</div>
			</div>
		);
	}

	if (nameSubmitted) {
		return <Email name={name} />;
	}

	// In case you want to display some fallback content if none of the conditions match:
	return null;
};

export default Name;
