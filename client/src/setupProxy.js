const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
	app.use(
		['/api', '/auth/google', '/car'],
		createProxyMiddleware({
			target: 'http://localhost:5555',
		})
	);
};
