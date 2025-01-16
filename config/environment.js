const fs = require('fs');
const path = require('path');

// Default to 'dev' if the ENV variable is not set
const env = process.env.ENV || 'dev'; 

// Construct the file path for the environment-specific JSON file
const configPath = path.join(__dirname, `${env}.json`);

// Read the JSON file corresponding to the environment
if (!fs.existsSync(configPath)) {
    throw new Error(`Config file for environment '${env}' not found at: ${configPath}`);
}

const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

module.exports = config;
