import { useRef } from "react";
import { useSectionTitleReveal } from "../hooks/gsap";

const Talents = () => {
	const TalentsRef = useRef(null);
	useSectionTitleReveal(TalentsRef, 0.4);
	return (
		<div className="container">
			<h3 className="talentsTitle" ref={TalentsRef}>
				Talents
			</h3>
		</div>
	);
};

export default Talents;
