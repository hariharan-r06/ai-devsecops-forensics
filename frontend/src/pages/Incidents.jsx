import React, { useState } from 'react';
import '../styles/Incidents.css';

const mockIncidents = [
	{ 
		id: 101, 
		title: 'Unauthorized Access', 
		description: 'Multiple failed logins detected on admin account.', 
		status: 'Open',
		severity: 'High',
		created: '2025-09-10 10:30:00',
		affected: 'admin-panel, auth-service',
		details: 'Detected 15 failed login attempts from IP 192.168.1.100 within 5 minutes. Account locked automatically.',
		evidence: ['auth-logs-2025-09-10.log', 'network-traffic.pcap', 'user-sessions.json']
	},
	{ 
		id: 102, 
		title: 'Malware Detected', 
		description: 'Suspicious binary found on build server.', 
		status: 'Investigating',
		severity: 'Critical',
		created: '2025-09-10 09:15:00',
		affected: 'build-server-01, jenkins-master',
		details: 'Antivirus scan detected suspicious executable in /tmp/build-artifacts/. File appears to be packed and obfuscated.',
		evidence: ['malware-scan-report.pdf', 'file-hash-analysis.txt', 'network-connections.log']
	},
	{ 
		id: 103, 
		title: 'Data Exfiltration', 
		description: 'High-volume outbound traffic from prod DB.', 
		status: 'Contained',
		severity: 'Critical',
		created: '2025-09-10 08:45:00',
		affected: 'prod-database, api-gateway',
		details: 'Unusual spike in outbound network traffic detected. 2.3GB of data transferred in 10 minutes to external IP.',
		evidence: ['network-traffic-analysis.pcap', 'database-query-logs.sql', 'api-access-logs.json']
	},
];

function Incidents() {
	const [selectedIncident, setSelectedIncident] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleViewIncident = (incident) => {
		setSelectedIncident(incident);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedIncident(null);
	};

	const handleAction = (id, action) => {
		console.log(`Incident ${id} - ${action}`);
		if (action === 'Freeze Pipeline') {
			alert('Pipeline frozen successfully!');
		} else if (action === 'Collect Evidence') {
			alert('Evidence collection initiated!');
		}
	};

	const getStatusColor = (status) => {
		switch (status) {
			case 'Open': return '#ef4444';
			case 'Investigating': return '#f59e0b';
			case 'Contained': return '#3b82f6';
			case 'Resolved': return '#10b981';
			default: return '#6b7280';
		}
	};

	const getSeverityColor = (severity) => {
		switch (severity) {
			case 'Critical': return '#dc2626';
			case 'High': return '#ef4444';
			case 'Medium': return '#f59e0b';
			case 'Low': return '#10b981';
			default: return '#6b7280';
		}
	};

	return (
		<div className="page incidents">
			<h1>Incidents</h1>
			<div className="incidents-grid">
				{mockIncidents.map((i) => (
					<div key={i.id} className="incident-card">
						<div className="incident-header">
							<h3>{i.title}</h3>
							<div className="incident-badges">
								<span 
									className="status-badge" 
									style={{ backgroundColor: getStatusColor(i.status) }}
								>
									{i.status}
								</span>
								<span 
									className="severity-badge" 
									style={{ backgroundColor: getSeverityColor(i.severity) }}
								>
									{i.severity}
								</span>
							</div>
						</div>
						<p className="incident-desc">{i.description}</p>
						<div className="incident-meta">
							<span className="incident-created">Created: {i.created}</span>
						</div>
						<div className="incident-actions">
							<button 
								className="btn-primary"
								onClick={() => handleViewIncident(i)}
							>
								View Details
							</button>
							<button 
								className="btn-secondary"
								onClick={() => handleAction(i.id, 'Acknowledge')}
							>
								Acknowledge
							</button>
						</div>
					</div>
				))}
			</div>

			{/* Incident Detail Modal */}
			{isModalOpen && selectedIncident && (
				<div className="modal-overlay" onClick={handleCloseModal}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<div className="modal-header">
							<h2>{selectedIncident.title}</h2>
							<button className="modal-close" onClick={handleCloseModal}>
								×
							</button>
						</div>
						
						<div className="modal-body">
							<div className="incident-details">
								<div className="detail-row">
									<label>Status:</label>
									<span 
										className="status-badge" 
										style={{ backgroundColor: getStatusColor(selectedIncident.status) }}
									>
										{selectedIncident.status}
									</span>
								</div>
								
								<div className="detail-row">
									<label>Severity:</label>
									<span 
										className="severity-badge" 
										style={{ backgroundColor: getSeverityColor(selectedIncident.severity) }}
									>
										{selectedIncident.severity}
									</span>
								</div>
								
								<div className="detail-row">
									<label>Created:</label>
									<span>{selectedIncident.created}</span>
								</div>
								
								<div className="detail-row">
									<label>Affected Systems:</label>
									<span>{selectedIncident.affected}</span>
								</div>
								
								<div className="detail-row full-width">
									<label>Description:</label>
									<p>{selectedIncident.description}</p>
								</div>
								
								<div className="detail-row full-width">
									<label>Details:</label>
									<p>{selectedIncident.details}</p>
								</div>
								
								<div className="detail-row full-width">
									<label>Evidence Files:</label>
									<div className="evidence-list">
										{selectedIncident.evidence.map((file, index) => (
											<div key={index} className="evidence-item">
												<span className="file-icon">📄</span>
												<span className="file-name">{file}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
						
						<div className="modal-actions">
							<button 
								className="btn-danger"
								onClick={() => handleAction(selectedIncident.id, 'Freeze Pipeline')}
							>
								🚫 Freeze Pipeline
							</button>
							<button 
								className="btn-warning"
								onClick={() => handleAction(selectedIncident.id, 'Collect Evidence')}
							>
								🔍 Collect Evidence
							</button>
							<button 
								className="btn-secondary"
								onClick={() => handleAction(selectedIncident.id, 'Resolve')}
							>
								✅ Resolve
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Incidents;
