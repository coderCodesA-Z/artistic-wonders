import PropTypes from "prop-types";
import "./style.css";

const Header = ({ name = "" }) => {
	const message = name===""
		? "I've been waiting for YOU 🤩"
		: `Thankyou for reaching out ${name.split(" ")[0]} 🎉`;
	return (
		<>
			<h1>{message}</h1>
		</>
	);
};

Header.propTypes = {
	name: PropTypes.string,
};
export default Header;
