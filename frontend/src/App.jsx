import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Alerts from './pages/Alerts';
import Logs from './pages/Logs';
import Incidents from './pages/Incidents';
import Settings from './pages/Settings';
import './styles/Layout.css';


function App() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [theme, setTheme] = useState(() => {
		const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
		return saved || 'light';
	});

	useEffect(() => {
		const root = document.documentElement;
		if (theme === 'dark') {
			root.classList.add('theme-dark');
		} else {
			root.classList.remove('theme-dark');
		}
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
	const closeSidebar = () => setIsSidebarOpen(false);

	return (
		<div className={`app-layout ${isSidebarOpen ? 'drawer-open' : ''}`}>
			<Navbar onToggleSidebar={toggleSidebar} theme={theme} onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />
			<div className="app-body">
				<Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
				<main className="app-content" onClick={closeSidebar}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/alerts" element={<Alerts />} />
						<Route path="/logs" element={<Logs />} />
						<Route path="/incidents" element={<Incidents />} />
						<Route path="/settings" element={<Settings />} />
					</Routes>
				</main>
			</div>
		</div>
	);
}

export default App;
