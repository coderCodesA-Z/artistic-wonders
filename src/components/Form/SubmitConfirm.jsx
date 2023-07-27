import PropTypes from "prop-types";
import Header from "./Header";
import "./style.css";
const Submitconfirm = ({ name }) => {
	return (
		<div>
			<Header name={name} />
			<div className="email-submit-container">
				<p className="email-submit">
					Your email has been submitted and we will be in touch with you
					shortly.
				</p>
			</div>
		</div>
	);
};

Submitconfirm.propTypes = {
	name: PropTypes.string,
};
export default Submitconfirm;
