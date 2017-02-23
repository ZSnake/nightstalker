'use strict';
import helloRoutes from './hello-routes';

export default (container) => {
	const routes = [].concat.apply(
		helloRoutes(container.resolve('HelloHandler')
	));
	return routes;
}
