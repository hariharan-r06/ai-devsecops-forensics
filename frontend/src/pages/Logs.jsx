import React, { useState, useEffect, useRef } from 'react';
import '../styles/Logs.css';

const initialLogs = [
	{ level: 'INFO', message: 'Service started', timestamp: '2025-09-10T08:00:00Z', source: 'api-server' },
	{ level: 'WARN', message: 'High memory usage on node-3', timestamp: '2025-09-10T08:05:12Z', source: 'monitoring' },
	{ level: 'ERROR', message: 'Failed login attempt for user admin', timestamp: '2025-09-10T08:06:45Z', source: 'auth-service' },
	{ level: 'INFO', message: 'Job build-124 completed successfully', timestamp: '2025-09-10T08:12:00Z', source: 'jenkins' },
	{ level: 'DEBUG', message: 'Processing request for /api/v1/alerts', timestamp: '2025-09-10T08:15:30Z', source: 'api-server' },
	{ level: 'ERROR', message: 'Database connection timeout', timestamp: '2025-09-10T08:18:22Z', source: 'database' },
];

function Logs() {
	const [logs, setLogs] = useState(initialLogs);
	const [autoScroll, setAutoScroll] = useState(true);
	const [viewMode, setViewMode] = useState('formatted'); // 'formatted' or 'json'
	const logsEndRef = useRef(null);
	const logsContainerRef = useRef(null);

	const scrollToBottom = () => {
		logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		if (autoScroll) {
			scrollToBottom();
		}
	}, [logs, autoScroll]);

	// Simulate live log updates
	useEffect(() => {
		const interval = setInterval(() => {
			const newLog = {
				level: ['INFO', 'WARN', 'ERROR', 'DEBUG'][Math.floor(Math.random() * 4)],
				message: `Live update ${Date.now()}`,
				timestamp: new Date().toISOString(),
				source: ['api-server', 'monitoring', 'auth-service', 'jenkins'][Math.floor(Math.random() * 4)]
			};
			setLogs(prev => [...prev, newLog]);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	const handleScroll = () => {
		if (logsContainerRef.current) {
			const { scrollTop, scrollHeight, clientHeight } = logsContainerRef.current;
			const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
			setAutoScroll(isAtBottom);
		}
	};

	const formatLogEntry = (log) => {
		const timestamp = new Date(log.timestamp).toLocaleTimeString();
		return `[${timestamp}] ${log.level.padEnd(5)} [${log.source.padEnd(12)}] ${log.message}`;
	};

	return (
		<div className="page logs">
			<h1>Logs</h1>
			
			<div className="logs-controls">
				<div className="logs-options">
					<button 
						className={`view-toggle ${viewMode === 'formatted' ? 'active' : ''}`}
						onClick={() => setViewMode('formatted')}
					>
						Formatted
					</button>
					<button 
						className={`view-toggle ${viewMode === 'json' ? 'active' : ''}`}
						onClick={() => setViewMode('json')}
					>
						JSON
					</button>
				</div>
				
				<div className="auto-scroll-toggle">
					<label className="toggle-label">
						<input
							type="checkbox"
							checked={autoScroll}
							onChange={(e) => setAutoScroll(e.target.checked)}
						/>
						<span className="toggle-text">Auto-scroll</span>
					</label>
				</div>
			</div>

			<div 
				className="logs-container" 
				ref={logsContainerRef}
				onScroll={handleScroll}
			>
				{viewMode === 'formatted' ? (
					<div className="logs-formatted">
						{logs.map((log, index) => (
							<div key={index} className={`log-entry log-entry--${log.level.toLowerCase()}`}>
								<span className="log-timestamp">
									{new Date(log.timestamp).toLocaleTimeString()}
								</span>
								<span className={`log-level log-level--${log.level.toLowerCase()}`}>
									{log.level}
								</span>
								<span className="log-source">[{log.source}]</span>
								<span className="log-message">{log.message}</span>
							</div>
						))}
						<div ref={logsEndRef} />
					</div>
				) : (
					<pre className="logs-pre">
						{JSON.stringify(logs, null, 2)}
					</pre>
				)}
			</div>
		</div>
	);
}

export default Logs;
