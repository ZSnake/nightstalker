'use strict';

import Hapi from 'hapi'
import "babel-polyfill";
import hapiAsyncHandler from 'hapi-async-handler';
import vision from 'vision';
import inert from 'inert';
import hapiSwagger from 'hapi-swagger';
import getRoutes from './app/routes/routes';
import mongoService from './app/database/connect-mongo';
import configureContainer from './app/config/configureContainer';

const server = new Hapi.Server();

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

const container = configureContainer();
const routes = getRoutes(container)
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
