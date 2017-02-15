'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const hapiAsyncHandler = require('hapi-async-handler');
const vision = require('vision');
const inert = require('inert');
const hapiSwagger = require('hapi-swagger');
const routes = require('./app/routes/routes');
const mongoService = require('./app/database/connect-mongo');

const hapiSwaggerOptions = {
	info: {
		title: 'Compass API',
		version: '0.0.1',
		contact: {
			url: 'https://github.com/AcklenAvenue/compass-backend',
		},
	},
	schemes: ['https'],
};

server.connection({
	port: process.env.PORT || 3000,
	routes: {
		cors: true,
	},
});

const plugins = [{
	register: hapiAsyncHandler,
}, {
	register: vision,
}, {
	register: inert,
}, {
	register: hapiSwagger,
	options: hapiSwaggerOptions,
},];

const validate = (decoded, request, callback) => {
	mongoService.connectMongoDb();
};

server.register(plugins, (err) => {
	if (err) {
		throw err;
	}
	server.start((error) => {
		if (error) {
			throw error;
		}
		server.route(routes);
		console.log(`server running at: ${server.info.uri}`);
	});
});