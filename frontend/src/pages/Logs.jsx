import React from 'react';
import '../styles/Logs.css';

const mockLogs = [
	{ level: 'INFO', message: 'Service started', timestamp: '2025-09-10T08:00:00Z' },
	{ level: 'WARN', message: 'High memory usage on node-3', timestamp: '2025-09-10T08:05:12Z' },
	{ level: 'ERROR', message: 'Failed login attempt for user admin', timestamp: '2025-09-10T08:06:45Z' },
	{ level: 'INFO', message: 'Job build-124 completed successfully', timestamp: '2025-09-10T08:12:00Z' },
];

function Logs() {
	return (
		<div className="page logs">
			<h1>Logs</h1>
			<div className="logs-container">
				<pre className="logs-pre">
{JSON.stringify(mockLogs, null, 2)}
				</pre>
			</div>
		</div>
	);
}

export default Logs;
