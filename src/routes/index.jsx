import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* Import components here */
import App from 'pages/sample';

/* create route with component */
const createRoute = (path, component) => <Route exact path={path} component={component}/>

/* Include routes here*/
function Routes() {
	return (
		<Router  onUpdate={() => window.scrollTo(0, 0)}>
			<Switch>
				<Route exact path='/' component={App} />
			</Switch>
		</Router>
	)
}

export default Routes;