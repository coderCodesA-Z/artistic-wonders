import { useRef } from "react";
import { useSectionTitleReveal } from "../hooks/gsap";

const Creations = () => {
	const creationsRef = useRef(null);
	useSectionTitleReveal(creationsRef, 0.4);
	return (
		<div className="container">
			<h3 className="creationsTitle" ref={creationsRef}>
				Creations
			</h3>
		</div>
	);
};

export default Creations;
