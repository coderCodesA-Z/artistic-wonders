import { Route, Routes } from "react-router-dom";
import { Creations, Discover, Home, Connect, Navbar, Talents } from "./components";

function App() {
	return (
		<div className="app">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/creations" element={<Creations />} />
				<Route path="/talents" element={<Talents />} />
				<Route path="/discover" element={<Discover />} />
				<Route path="/connect" element={<Connect />} />
			</Routes>
		</div>
	);
}

export default App;
