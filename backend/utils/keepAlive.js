const http = require('http');
const https = require('https');

function startKeepAlive(targetUrl, intervalMs = 14 * 60 * 1000) {
    if (!targetUrl) {
        return;
    }

    const url = new URL(targetUrl);
    const protocol = url.protocol === 'https:' ? https : http;

    const ping = () => {
        const req = protocol.request(url, (res) => {
            res.resume();
        });
        req.on('error', () => {});
        req.end();
    };

    ping();
    setInterval(ping, Math.max(intervalMs, 5 * 60 * 1000));
}

module.exports = startKeepAlive;
