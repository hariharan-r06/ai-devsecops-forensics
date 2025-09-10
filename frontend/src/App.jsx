import React from 'react';
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
	return (
		<div className="app-layout">
			<Navbar />
			<div className="app-body">
				<Sidebar />
				<main className="app-content">
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
