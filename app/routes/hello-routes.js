import co from 'co';
import Joi from 'joi'

export default (helloHandler) => {
    return [
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
} 