import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";
import React from "react";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import useFetch from "./components/Hooks/useFetch";
import Location from "./pages/Location/Location";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";

export default function App() {
	const [fetchLocations] = useFetch("/locations.json");

	return (
		<Router>
			<div className="App">
				<Header />
				<Routes>
					<Route exact path="/" element={<Home locations={fetchLocations} />} />
					<Route path="location/:id" element={<Location locations={fetchLocations} />} />
					<Route path="about" element={<About />} />
					<Route path="*" element={<Error />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}
