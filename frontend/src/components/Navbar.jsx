import React, { useState, useRef, useEffect } from 'react';
import '../styles/Navbar.css';

function Navbar({ onToggleSidebar, theme = 'light', onToggleTheme }) {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsDropdownOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const handleProfileClick = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const handleLogout = () => {
		console.log('Logout clicked');
		setIsDropdownOpen(false);
	};

	const handleProfile = () => {
		console.log('Profile clicked');
		setIsDropdownOpen(false);
	};

	return (
		<nav className="navbar">
			<div className="navbar__left">
				<button className="navbar__menuBtn" aria-label="Toggle menu" onClick={onToggleSidebar}>
					<span className="navbar__menuIcon" />
				</button>
				<div className="navbar__title">AI DevSecOps Forensics</div>
			</div>
			<div className="navbar__right">
				<button 
					className="theme-toggle-btn" 
					aria-label="Toggle theme"
					onClick={onToggleTheme}
				>
					<span className="theme-toggle-icon">{theme === 'dark' ? '🌙' : '☀️'}</span>
				</button>
				<div className="navbar__user" ref={dropdownRef}>
					<button className="user-profile-btn" onClick={handleProfileClick} aria-label="User profile">
						<div className="avatar" aria-hidden="true">AD</div>
						<span className="user-name">Admin</span>
					</button>
					{isDropdownOpen && (
						<div className="user-dropdown">
							<button className="dropdown-item" onClick={handleProfile}>
								<span className="dropdown-icon">👤</span>
								Profile
							</button>
							<button className="dropdown-item" onClick={handleLogout}>
								<span className="dropdown-icon">🚪</span>
								Logout
							</button>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
