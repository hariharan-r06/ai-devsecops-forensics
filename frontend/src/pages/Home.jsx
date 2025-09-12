import React from 'react';
import '../styles/Home.css';

function Home() {
	const stats = [
		{ label: 'Active Alerts', value: '12', trend: '+3', color: '#ef4444' },
		{ label: 'Open Incidents', value: '3', trend: '-1', color: '#f59e0b' },
		{ label: 'Logs Today', value: '2,847', trend: '+156', color: '#3b82f6' },
		{ label: 'System Health', value: '98%', trend: '+2%', color: '#10b981' }
	];

	const recentActivity = [
		{ type: 'alert', message: 'High severity vulnerability detected in build pipeline', time: '2 min ago' },
		{ type: 'incident', message: 'Unauthorized access attempt blocked', time: '15 min ago' },
		{ type: 'log', message: 'System backup completed successfully', time: '1 hour ago' },
		{ type: 'alert', message: 'Memory usage spike detected on node-3', time: '2 hours ago' }
	];

	return (
		<div className="page home">
			<div className="home-header">
				<h1>AI DevSecOps Forensics Dashboard</h1>
				<p>Real-time monitoring and forensic analysis across your DevSecOps lifecycle</p>
			</div>

			<div className="stats-grid">
				{stats.map((stat, index) => (
					<div key={index} className="stat-card">
						<div className="stat-content">
							<div className="stat-value" style={{ color: stat.color }}>
								{stat.value}
							</div>
							<div className="stat-label">{stat.label}</div>
						</div>
						<div className="stat-trend" style={{ color: stat.trend.startsWith('+') ? '#10b981' : '#ef4444' }}>
							{stat.trend}
						</div>
					</div>
				))}
			</div>

			<div className="dashboard-content">
				<div className="dashboard-section">
					<h2>Recent Activity</h2>
					<div className="activity-list">
						{recentActivity.map((activity, index) => (
							<div key={index} className="activity-item">
								<div className={`activity-icon activity-icon--${activity.type}`}>
									{activity.type === 'alert' && '⚠️'}
									{activity.type === 'incident' && '🚨'}
									{activity.type === 'log' && '📝'}
								</div>
								<div className="activity-content">
									<div className="activity-message">{activity.message}</div>
									<div className="activity-time">{activity.time}</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="dashboard-section">
					<h2>Quick Actions</h2>
					<div className="quick-actions">
						<button className="action-btn action-btn--primary">
							🔍 View All Alerts
						</button>
						<button className="action-btn action-btn--secondary">
							📊 Generate Report
						</button>
						<button className="action-btn action-btn--secondary">
							⚙️ System Settings
						</button>
						<button className="action-btn action-btn--secondary">
							📈 View Analytics
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
