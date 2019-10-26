// prettier-ignore
import { withWidth } from "@material-ui/core";
import { WithWidth } from "@material-ui/core/withWidth";
import * as React from "react";
import { Route, RouteComponentProps, Router, Switch } from "react-router-dom";
import { history } from "./configureStore";
import withRoot from "./withRoot";

//Route
import Sub from './router/Sub';
import NotFound from './layout/error/NotFound';



interface Props extends RouteComponentProps<void>, WithWidth {}

const App = (props?: Props) => {

	return (
		<Router history={history} >
			<Switch>
				<Route path='/sub' component={Sub} />
				<Route path='/sub/' component={Sub} />
				<Route expact path='/' component={Sub} />
				<Route path='/*' componenet={NotFound} />
			</Switch>
		</Router>
	);
}
	
export default (withRoot(withWidth()(App)));
