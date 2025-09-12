import React, { useState } from 'react';
import '../styles/Settings.css';

function Settings() {
	const [formData, setFormData] = useState({
		slackWebhook: '',
		jenkinsApiKey: '',
		emailNotifications: true,
		alertThreshold: 'medium',
		autoResponse: false,
		evidenceRetention: '30',
		timezone: 'UTC',
		apiEndpoint: 'https://api.forensics.example.com'
	});

	const [hasChanges, setHasChanges] = useState(false);
	const [isSaving, setIsSaving] = useState(false);

	const handleInputChange = (field, value) => {
		setFormData(prev => ({ ...prev, [field]: value }));
		setHasChanges(true);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSaving(true);
		
		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 1000));
		
		console.log('Settings saved:', formData);
		setHasChanges(false);
		setIsSaving(false);
		alert('Settings saved successfully!');
	};

	const handleCancel = () => {
		// Reset to original values
		setFormData({
			slackWebhook: '',
			jenkinsApiKey: '',
			emailNotifications: true,
			alertThreshold: 'medium',
			autoResponse: false,
			evidenceRetention: '30',
			timezone: 'UTC',
			apiEndpoint: 'https://api.forensics.example.com'
		});
		setHasChanges(false);
	};

	return (
		<div className="page settings">
			<h1>Settings</h1>
			<form className="settings-form" onSubmit={handleSubmit}>
				<div className="settings-section">
					<h3>Notifications</h3>
					<label>
						<span>Slack Webhook URL</span>
						<input 
							type="url" 
							placeholder="https://hooks.slack.com/..." 
							value={formData.slackWebhook} 
							onChange={(e) => handleInputChange('slackWebhook', e.target.value)} 
						/>
					</label>
					
					<label className="toggle-label">
						<span>Email Notifications</span>
						<div className="toggle-switch">
							<input
								type="checkbox"
								checked={formData.emailNotifications}
								onChange={(e) => handleInputChange('emailNotifications', e.target.checked)}
							/>
							<span className="toggle-slider"></span>
						</div>
					</label>
				</div>

				<div className="settings-section">
					<h3>Integrations</h3>
					<label>
						<span>Jenkins API Key</span>
						<input 
							type="password" 
							placeholder="••••••••" 
							value={formData.jenkinsApiKey} 
							onChange={(e) => handleInputChange('jenkinsApiKey', e.target.value)} 
						/>
					</label>
					
					<label>
						<span>API Endpoint</span>
						<input 
							type="url" 
							placeholder="https://api.example.com" 
							value={formData.apiEndpoint} 
							onChange={(e) => handleInputChange('apiEndpoint', e.target.value)} 
						/>
					</label>
				</div>

				<div className="settings-section">
					<h3>Alert Configuration</h3>
					<label>
						<span>Alert Threshold</span>
						<select 
							value={formData.alertThreshold} 
							onChange={(e) => handleInputChange('alertThreshold', e.target.value)}
						>
							<option value="low">Low</option>
							<option value="medium">Medium</option>
							<option value="high">High</option>
							<option value="critical">Critical</option>
						</select>
					</label>
					
					<label className="toggle-label">
						<span>Auto Response</span>
						<div className="toggle-switch">
							<input
								type="checkbox"
								checked={formData.autoResponse}
								onChange={(e) => handleInputChange('autoResponse', e.target.checked)}
							/>
							<span className="toggle-slider"></span>
						</div>
					</label>
				</div>

				<div className="settings-section">
					<h3>System Configuration</h3>
					<label>
						<span>Evidence Retention (days)</span>
						<input 
							type="number" 
							min="1" 
							max="365" 
							value={formData.evidenceRetention} 
							onChange={(e) => handleInputChange('evidenceRetention', e.target.value)} 
						/>
					</label>
					
					<label>
						<span>Timezone</span>
						<select 
							value={formData.timezone} 
							onChange={(e) => handleInputChange('timezone', e.target.value)}
						>
							<option value="UTC">UTC</option>
							<option value="America/New_York">Eastern Time</option>
							<option value="America/Chicago">Central Time</option>
							<option value="America/Denver">Mountain Time</option>
							<option value="America/Los_Angeles">Pacific Time</option>
							<option value="Europe/London">London</option>
							<option value="Europe/Paris">Paris</option>
							<option value="Asia/Tokyo">Tokyo</option>
						</select>
					</label>
				</div>

				<div className="form-actions">
					<button 
						type="button" 
						className="btn-cancel" 
						onClick={handleCancel}
						disabled={!hasChanges}
					>
						Cancel
					</button>
					<button 
						type="submit" 
						className="btn-save"
						disabled={!hasChanges || isSaving}
					>
						{isSaving ? 'Saving...' : 'Save Changes'}
					</button>
				</div>
			</form>
		</div>
	);
}

export default Settings;
