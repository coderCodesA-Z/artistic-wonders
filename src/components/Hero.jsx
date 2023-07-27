import { useRef } from "react";
import { useGsapShutterReveal } from "../hooks/gsap";

const Hero = () => {
	const shutter1 = useRef(null);
	const shutter2 = useRef(null);
	const shutter3 = useRef(null);
	const heroRef = useRef(null);
	const paraRef = useRef(null);
	const nameRef = useRef(null);

  useGsapShutterReveal(shutter3, heroRef, 0);
	useGsapShutterReveal(shutter1, heroRef, 0.8);
	useGsapShutterReveal(shutter2, heroRef, 2);
	useGsapShutterReveal(paraRef, heroRef, 2.4);

	return (
		<section className="hero container" ref={heroRef}>
			<span className="floating-avatar" ref={shutter3}>
				<img src="../../images/floatingMan.png" alt="" />
			</span>
			<div className="hero-content">
				<h1 className="ethereal" ref={shutter1}>
					Hello There,
				</h1>
			</div>

			<h1 className="canvas" ref={shutter2}>
				I&apos;m{" "}
				<span className="name" ref={nameRef}>
					Sayan
				</span>
			</h1>
			<p ref={paraRef}>
				<span className="paradox">
					Exploring the paradøx of timely yet{" "}
					<span className="timeless-word">timeless ⌛️</span>
				</span>{" "}
				<br />A tech enthusiast on the path to becoming a Full Stack Developer,
				exploring the world one adventure at a time
			</p>
		</section>
	);
};

export default Hero;
