// config.js
const config = {
    port: process.env.PORT || 80,
    appVersion: process.env.VERSION || "0.0.0",
    environmentName: process.env.ENVIRONMENT ||"DEV"
};

module.exports = config;
