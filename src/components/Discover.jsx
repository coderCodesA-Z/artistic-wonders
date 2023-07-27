import { useRef } from "react";
import { useSectionTitleReveal } from "../hooks/gsap";

const Discover = () => {
	const DiscoverRef = useRef(null);
	useSectionTitleReveal(DiscoverRef, 0.4);
	return (
		<div className="container">
			<h3 className="discoverTitle" ref={DiscoverRef}>
				Discover
			</h3>
		</div>
	);
};

export default Discover;
