import React from 'react';
import '../styles/Navbar.css';

function Navbar({ onToggleSidebar }) {
	return (
		<nav className="navbar">
			<div className="navbar__left">
				<button className="navbar__menuBtn" aria-label="Toggle menu" onClick={onToggleSidebar}>
					<span className="navbar__menuIcon" />
				</button>
				<div className="navbar__title">AI DevSecOps Forensics</div>
			</div>
			<div className="navbar__right">
				<div className="navbar__user">
					<div className="avatar" aria-hidden="true">AD</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
