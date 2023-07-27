import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useGsapElementDrop } from "../hooks/gsap";

const Navbar = () => {
	const li1Ref = useRef(null);
	const li2Ref = useRef(null);
	const li3Ref = useRef(null);
	const logoRef = useRef(null);
	const favoriteRef = useRef(null);

	const links = [li1Ref, li2Ref, li3Ref];

	useGsapElementDrop([logoRef], 0.9);
	useGsapElementDrop(links, 3.5);
	useGsapElementDrop([favoriteRef], 5.1);
	return (
		<nav className="container navbar">
			<div className="navbar-left">
				<ul className="links">
					<li ref={li1Ref}>
						<NavLink
							to="/creations"
							style={({ isActive }) => {
								return {
									color: isActive ? "#FF8B8B" : "",
								};
							}}
						>
							Creations
						</NavLink>
					</li>
					<li ref={li2Ref}>
						<NavLink
							to="/talents"
							style={({ isActive }) => {
								return {
									color: isActive ? "#FF8B8B" : "",
								};
							}}
						>
							Talents
						</NavLink>
					</li>
					<li ref={li3Ref}>
						<NavLink
							to="/discover"
							style={({ isActive }) => {
								return {
									color: isActive ? "#FF8B8B" : "",
								};
							}}
						>
							Discover
						</NavLink>
					</li>
				</ul>
			</div>
			<div className="navbar-center" ref={logoRef}>
				<NavLink
					to="/"
					style={({ isActive }) => {
						return {
							color: isActive ? "#FF8B8B" : "",
						};
					}}
				>
					dive into a realm of artistic wonders 💫
				</NavLink>
			</div>
			<div className="navbar-right" ref={favoriteRef}>
				<NavLink
					to="/connect"
					style={({ isActive }) => {
						return {
							color: isActive ? "#FF8B8B" : "",
						};
					}}
				>
					Connect
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
