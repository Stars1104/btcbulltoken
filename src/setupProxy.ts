const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app: any) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://pro-api.coinmarketcap.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/v1',
            },
            onProxyReq: (proxyReq: any) => {
                proxyReq.setHeader('X-CMC_PRO_API_KEY', 'b87ebb39-b81c-4121-809f-5568b77987c0');
            },
        })
    );
}; 