import React, { useState, useMemo } from 'react';
import '../styles/Alerts.css';

const mockAlerts = [
	{ id: 1, type: 'Anomaly Detection', severity: 'High', timestamp: '2025-09-10 10:12:33', status: 'Open' },
	{ id: 2, type: 'Vulnerability', severity: 'Medium', timestamp: '2025-09-10 09:45:02', status: 'Investigating' },
	{ id: 3, type: 'Policy Violation', severity: 'Low', timestamp: '2025-09-10 08:21:49', status: 'Resolved' },
	{ id: 4, type: 'Data Breach', severity: 'Critical', timestamp: '2025-09-10 11:30:15', status: 'Open' },
	{ id: 5, type: 'Suspicious Activity', severity: 'High', timestamp: '2025-09-10 07:15:42', status: 'Investigating' },
	{ id: 6, type: 'Unauthorized Access', severity: 'Medium', timestamp: '2025-09-10 06:45:18', status: 'Resolved' },
];

function Alerts() {
	const [searchTerm, setSearchTerm] = useState('');
	const [severityFilter, setSeverityFilter] = useState('All');

	const filteredAlerts = useMemo(() => {
		return mockAlerts.filter(alert => {
			const matchesSearch = alert.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
								 alert.status.toLowerCase().includes(searchTerm.toLowerCase());
			const matchesSeverity = severityFilter === 'All' || alert.severity === severityFilter;
			return matchesSearch && matchesSeverity;
		});
	}, [searchTerm, severityFilter]);

	const severityOptions = ['All', 'Critical', 'High', 'Medium', 'Low'];

	return (
		<div className="page alerts">
			<h1>Alerts</h1>
			
			<div className="alerts-controls">
				<div className="search-container">
					<input
						type="text"
						placeholder="Search alerts..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="search-input"
					/>
					<span className="search-icon">🔍</span>
				</div>
				
				<div className="filter-container">
					<select
						value={severityFilter}
						onChange={(e) => setSeverityFilter(e.target.value)}
						className="severity-filter"
					>
						{severityOptions.map(option => (
							<option key={option} value={option}>
								{option === 'All' ? 'All Severities' : option}
							</option>
						))}
					</select>
				</div>
			</div>

			<div className="alerts-summary">
				<span className="alerts-count">
					{filteredAlerts.length} of {mockAlerts.length} alerts
				</span>
			</div>

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
						{filteredAlerts.length > 0 ? (
							filteredAlerts.map((a) => (
								<tr key={a.id}>
									<td>{a.type}</td>
									<td>
										<span className={`badge badge--${a.severity.toLowerCase()}`}>{a.severity}</span>
									</td>
									<td>{a.timestamp}</td>
									<td>{a.status}</td>
								</tr>
							))
						) : (
							<tr>
								<td colSpan="4" className="no-results">
									No alerts found matching your criteria
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Alerts;
