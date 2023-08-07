import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Resume from "./pages/resume";
import Education from "./pages/education";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<Homepage />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/projects" element={<Projects />} />
				<Route exact path="/education" element={<Education />} />
				<Route exact path="/resume" element={<Resume />} />
				<Route exact path="/articles" element={<Articles />} />
				<Route exact path="/article/:slug" element={<ReadArticle />} />
				<Route exact path="/contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
