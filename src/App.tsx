import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sobre from './pages/Sobre';
import Home from './pages/Home';
import Projects from './pages/Projetos';
import React from 'react';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/sobre" element={<Sobre />} caseSensitive={false} />
				<Route path="/projetos" element={<Projects />} caseSensitive={false} />
				<Route path="/" element={<Home />} caseSensitive={false} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
