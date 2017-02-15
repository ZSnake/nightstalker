const co = require('co');
const Joi = require('joi');
const helloHandler = require('../handlers/hello/hello-handler')

module.exports = [
    {
        method: 'GET',
        path: '/',
        config: {
            handler: {
                async: co.wrap(helloHandler.getHello),
            },
            description: 'Test page',
            notes: 'Test',
            tags: ['api'],
            plugins: {
                'hapi-swagger': {
                    responses: {
                        200: {
                            description: 'Success',
                            schema: Joi.string('Hello, World!'),
                        },
                    },
                },
            },
        },
    }
]