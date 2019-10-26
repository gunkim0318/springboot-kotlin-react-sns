// prettier-ignore
import { withWidth } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { WithWidth } from "@material-ui/core/withWidth";

import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { Route, RouteComponentProps, Router, Switch } from "react-router-dom";
import { history } from "../configureStore";
import withRoot from "../withRoot";

//Route
import router from '../router';
import LoginPage from '../layout/sub/login/LoginPage';

//css
import RouterStyles from './RouterStyles';

const MyRoutes = () => {
	const [ routerArray ] = React.useState([...router]);

	return (
		<Switch>
			{console.log(routerArray.length)}
			{
				routerArray.map((v, i) => {
					if('Sub' === v.route) {
						console.log('dddddd')
						return(
							<Route path={v.path} key={i} component={v.component} />
						)
					} else {
						return []
					}
				})
			}
			<Route expact path='/' component={LoginPage} />
			<Route path='/sub' component={LoginPage} />
			<Route path='/sub/' component={LoginPage} />
		</Switch>
	)
}

interface Props extends RouteComponentProps<void>, WithWidth { }

const Sub = (props?: Props) => {
	const classes = RouterStyles();
	
	//useState

	return (
		<Router history={history} >
			<div className={classes.subRoot}>
				<div className={classes.content}>
					<MyRoutes />
				</div>
			</div>
		</Router>
	);
}

const useStyles = makeStyles((theme: Theme) => ({

}));

export default (withRoot(withWidth()(Sub)));
