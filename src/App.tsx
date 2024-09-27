import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import React from 'react';
import Projects from './pages/Projects';
import { ThemeProvider } from './components/ThemeProvider';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<I18nextProvider i18n={i18n} defaultNS={'translation'}>
				<div className="font-mainFont text-bioBgColor dark:bg-bioBgColor dark:text-mainTextColor">
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
			</I18nextProvider>
		</ThemeProvider>
	);
}
export default App;
