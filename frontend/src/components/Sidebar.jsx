import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar({ isOpen, onClose }) {
	return (
		<>
			<div className={`sidebar ${isOpen ? 'open' : ''}`}>
				<ul className="sidebar__list" onClick={onClose}>
					<li>
						<NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
					</li>
					<li>
						<NavLink to="/alerts" className={({ isActive }) => isActive ? 'active' : ''}>Alerts</NavLink>
					</li>
					<li>
						<NavLink to="/logs" className={({ isActive }) => isActive ? 'active' : ''}>Logs</NavLink>
					</li>
					<li>
						<NavLink to="/incidents" className={({ isActive }) => isActive ? 'active' : ''}>Incidents</NavLink>
					</li>
					<li>
						<NavLink to="/settings" className={({ isActive }) => isActive ? 'active' : ''}>Settings</NavLink>
					</li>
				</ul>
			</div>
			<div className={`sidebar__backdrop ${isOpen ? 'show' : ''}`} onClick={onClose} />
		</>
	);
}

export default Sidebar;
