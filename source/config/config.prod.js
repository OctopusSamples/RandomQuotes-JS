// config.js
const config = {
    app: {
        port: 80,
        appVersion: '#{Octopus.Release.Number}',
        environmentName: '#{Octopus.Environment.Name}',
    },
};

module.exports = config;