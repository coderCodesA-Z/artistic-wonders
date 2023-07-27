import { useRef } from "react";
import video from "/images/glassmorphism.mp4";
import {  useSectionTitleReveal } from "../hooks/gsap";
import ConnectForm from "./ConnectForm";

const Connect = () => {
	const connectRef = useRef(null);
	useSectionTitleReveal(connectRef, 1.9);


	return (
		<div className="connectPage">
			<video
				src={video}
				width="750"
				height="500"
				autoPlay
				loop
				muted
				playsInline
			/>
			<h3 className="connectTitle" ref={connectRef}>
				Let&apos;s Connect
			</h3>
			<ConnectForm />
		</div>
	);
};

export default Connect;
