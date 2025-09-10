import React from 'react';
import '../styles/Incidents.css';

const mockIncidents = [
	{ id: 101, title: 'Unauthorized Access', description: 'Multiple failed logins detected on admin account.', status: 'Open' },
	{ id: 102, title: 'Malware Detected', description: 'Suspicious binary found on build server.', status: 'Investigating' },
	{ id: 103, title: 'Data Exfiltration', description: 'High-volume outbound traffic from prod DB.', status: 'Contained' },
];

function Incidents() {
	const handleAction = (id, action) => {
		// Placeholder for future integration
		console.log(`Incident ${id} - ${action}`);
	};

	return (
		<div className="page incidents">
			<h1>Incidents</h1>
			<div className="incidents-grid">
				{mockIncidents.map((i) => (
					<div key={i.id} className="incident-card">
						<div className="incident-header">
							<h3>{i.title}</h3>
							<span className="status">{i.status}</span>
						</div>
						<p className="incident-desc">{i.description}</p>
						<div className="incident-actions">
							<button onClick={() => handleAction(i.id, 'View')}>View</button>
							<button onClick={() => handleAction(i.id, 'Acknowledge')}>Acknowledge</button>
							<button onClick={() => handleAction(i.id, 'Resolve')}>Resolve</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Incidents;
