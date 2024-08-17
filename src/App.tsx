import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import React from 'react';
import Projects from './pages/Projects';

function App() {
	return (
		<div className="font-mainFont">
			<BrowserRouter>
				<Routes>
					<Route path="/about" element={<About />} caseSensitive={false} />
					<Route
						path="/projects"
						element={<Projects />}
						caseSensitive={false}
					/>
					<Route path="/" element={<Home />} caseSensitive={false} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
export default App;
