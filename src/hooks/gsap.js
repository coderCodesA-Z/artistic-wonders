import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useGsapShutterReveal = (item, triggerEl, delay = 0) => {
	useEffect(() => {
		gsap.fromTo(
			item.current,
			{ opacity: "0" },
			{
				opacity: "100%",
				duration: 3.87,
				delay,
				ease: Expo.easeInOut,
				scrollTrigger: {
					trigger: triggerEl.current,
					toggleActions: "play reverse play reverse",
				},
			}
		);
	}, [item, triggerEl, delay]);
};

export const useGsapElementDrop = (items, delay = 0) => {
	useEffect(() => {
		const els = items.map((item) => item.current);

		gsap.fromTo(
			els,
			{ y: "-100%", opacity: 0 },
			{ y: 0, opacity: "100%", duration: 2.6, stagger: 0.6, delay }
		);
	}, [items, delay]);
};

export const useChangeNameColor = (nameRef) => {
	useEffect(() => {
		// Animation timeline for the name text color changing
		const nameTimeline = gsap.timeline({
			repeat: -1,
			yoyo: true,
			delay: 1.5, // Adjust the delay before the animation starts
		});

		// Define the colors you want to animate between
		const colors = ["#e056fd", "#000000"]; // Add more colors as needed

		// Animate the fill attribute of the name text element
		nameTimeline.to(nameRef.current, {
			duration: 1.5, // Adjust the duration of each color change
			fill: colors,
			ease: "linear", // Linear animation
		});

		return () => {
			nameTimeline.kill(); // Kill the animation when the component unmounts to prevent memory leaks
		};
	}, [nameRef]);
};

export const useGsapPhotoLevitate = (arr, trig) => {
	useEffect(() => {
		const el = arr.map((item) => item.current);

		gsap.fromTo(
			el,
			{ y: 0 },
			{
				y: "-35%",
				ease: Expo.easeInOut,
				scrollTrigger: {
					trigger: trig.current,
					scrub: 1,
					toggleActions: "play reverse play reverse",
				},
			}
		);
	}, [arr, trig]);
};

export const useGsapFeatureLeftShutterUnveil = (item, trig) => {
	useEffect(() => {
		const el = item.current;

		gsap.fromTo(
			el,
			{ opacity: "0" },
			{
				opacity: "100%",
				duration: 1.3,
				ease: Expo.easeInOut,
				scrollTrigger: {
					trigger: trig.current,
					start: "top center",
					end: "bottom center",
					toggleActions: "play reverse play reverse",
				},
			}
		);
	}, [item, trig]);
};
export const useGsapFeatureRightShutterUnveil = (item, trig) => {
	useEffect(() => {
		const el = item.current;

		gsap.fromTo(
			el,
			{ width: "0", opacity: "0" },
			{
				width: "100%",
				opacity: "100%",
				duration: 1.3,
				ease: Expo.easeInOut,
				scrollTrigger: {
					trigger: trig.current,
					start: "top center",
					end: "bottom center",
					toggleActions: "play reverse play reverse",
				},
			}
		);
	}, [item, trig]);
};

export const useGsapGalleryImage = (item) => {
	useEffect(() => {
		const el = item.current;

		gsap.fromTo(
			el,
			{
				x: 0,
				width: 0,
			},
			{
				x: "30%",
				width: "100%",
				duration: 1,
				ease: Expo.easeInOut,
				scrollTrigger: {
					trigger: el,
					start: "top center",
					end: "bottom top",
					toggleActions: "play reverse play reverse",
				},
			}
		);
	}, [item]);
};
export const useGsapGalleryTitle = (item, trig) => {
	useEffect(() => {
		const el = item.current;

		gsap.fromTo(
			el,
			{
				x: "30%",
			},
			{
				x: 0,
				duration: 1,
				ease: Expo.easeInOut,
				scrollTrigger: {
					trigger: trig.current,
					start: "top center",
					end: "bottom top",
					toggleActions: "play reverse play reverse",
				},
			}
		);
	}, [item, trig]);
};
export const useGsapGalleryCategory = (item, trig) => {
	useEffect(() => {
		const el = item.current;

		gsap.fromTo(
			el,
			{
				x: "-100vw",
			},
			{
				x: 0,
				duration: 1,
				ease: Expo.easeInOut,
				scrollTrigger: {
					trigger: trig.current,
					start: "top center",
					end: "bottom top",
					toggleActions: "play reverse play reverse",
				},
			}
		);
	}, [item, trig]);
};

export const useGsapFooterHeadline = (item, trig) => {
	useEffect(() => {
		const el = item.current;

		gsap.fromTo(
			el,
			{
				y: "-100%",
			},
			{
				y: 0,
				duration: 1,
				ease: Expo.easeInOut,
				scrollTrigger: {
					trigger: trig.current,
					toggleActions: "play",
				},
			}
		);
	}, [item, trig]);
};

export const useGsapNotFoundHeadline = (item, delay = 0) => {
	useEffect(() => {
		const el = item.current;

		gsap.fromTo(
			el,
			{
				x: "-100vw",
			},
			{
				x: "-50%",
				duration: 1.5,
				ease: Expo.easeInOut,
				delay: delay,
			}
		);
	}, [item, delay]);
};

export const useSectionTitleReveal = (el, delay = 0) => {
	useEffect(() => {
		gsap.fromTo(
			el.current,
			{
				y: 200,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 1.2,
				delay: delay,
				ease: "power4.out",
				scrollTrigger: {
					trigger: el.current,
				},
			}
		);
	}, [el, delay]);
};

export const useInputsReveal = (items, delay = 0) => {
	useEffect(() => {
		const el = items.map((item) => item.current);

		gsap.fromTo(
			el,
			{
				y: 200,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 1,
				delay: delay,
				ease: "power4.out",
				stagger: 0.2,
				scrollTrigger: {
					trigger: el,
				},
			}
		);
	}, [items, delay]);
};
