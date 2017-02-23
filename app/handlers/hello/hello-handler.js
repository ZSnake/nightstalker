//@flow
'use strict';

export default class HelloHandler {
	 getHello(req: any, reply: any) {
		const response = 'Hello, World!';
		reply(response);
	};
}

