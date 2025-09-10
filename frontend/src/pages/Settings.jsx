import React, { useState } from 'react';
import '../styles/Settings.css';

function Settings() {
	const [slackWebhook, setSlackWebhook] = useState('');
	const [jenkinsApiKey, setJenkinsApiKey] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ slackWebhook, jenkinsApiKey });
	};

	return (
		<div className="page settings">
			<h1>Settings</h1>
			<form className="settings-form" onSubmit={handleSubmit}>
				<label>
					<span>Slack Webhook</span>
					<input type="url" placeholder="https://hooks.slack.com/..." value={slackWebhook} onChange={(e) => setSlackWebhook(e.target.value)} />
				</label>
				<label>
					<span>Jenkins API Key</span>
					<input type="password" placeholder="••••••••" value={jenkinsApiKey} onChange={(e) => setJenkinsApiKey(e.target.value)} />
				</label>
				<div className="form-actions">
					<button type="submit">Save</button>
				</div>
			</form>
		</div>
	);
}

export default Settings;
