'use strict';

const getHello = function* getHello(req, reply) {
	const response = 'Hello, World!';
	reply(response);
};



module.exports = {
	getHello,
};
