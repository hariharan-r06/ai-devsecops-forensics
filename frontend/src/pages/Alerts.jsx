import React from 'react';
import '../styles/Alerts.css';

const mockAlerts = [
	{ id: 1, type: 'Anomaly Detection', severity: 'High', timestamp: '2025-09-10 10:12:33', status: 'Open' },
	{ id: 2, type: 'Vulnerability', severity: 'Medium', timestamp: '2025-09-10 09:45:02', status: 'Investigating' },
	{ id: 3, type: 'Policy Violation', severity: 'Low', timestamp: '2025-09-10 08:21:49', status: 'Resolved' },
];

function Alerts() {
	return (
		<div className="page alerts">
			<h1>Alerts</h1>
			<div className="table-container">
				<table className="alerts-table">
					<thead>
						<tr>
							<th>Type</th>
							<th>Severity</th>
							<th>Timestamp</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{mockAlerts.map((a) => (
							<tr key={a.id}>
								<td>{a.type}</td>
								<td>
									<span className={`badge badge--${a.severity.toLowerCase()}`}>{a.severity}</span>
								</td>
								<td>{a.timestamp}</td>
								<td>{a.status}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Alerts;
