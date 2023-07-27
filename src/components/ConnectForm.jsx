import { useRef } from "react";
import { useGsapElementDrop } from "../hooks/gsap";
import { Name } from "./Form";

const ConnectForm = () => {
		const connectFormRef = useRef(null);
		useGsapElementDrop([connectFormRef], 0.4);
	return (
		<>
			<div className="form" ref={connectFormRef}>
				<div id="form-app">
					<Name />
				</div>
			</div>
		</>
	);
};

export default ConnectForm;
