// prettier-ignore
import { withWidth, Grid } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { WithWidth } from "@material-ui/core/withWidth";

import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { Route, RouteComponentProps, Router, Switch } from "react-router-dom";
import { history } from "../configureStore";
import withRoot from "../withRoot";

//Route
import router from '../router';
import HomePage from '../layout/main/home/HomePage';

//css
import RouterStyles from './RouterStyles';

const MyRoutes = () => {
	const [ routerArray ] = React.useState([...router]);

	return (
		<Switch>
			{console.log(routerArray.length)}
			{
				routerArray.map((v, i) => {
					if('Main' === v.route) {
						return(
							<Route path={v.path} key={i} component={v.component} />
						)
					} else {
						return []
					}
				})
			}
			<Route path='/main' component={HomePage} />
			<Route path='/main/' component={HomePage} />
		</Switch>
	)
}

interface Props extends RouteComponentProps<void>, WithWidth { }

const Main = (props?: Props) => {
	const classes = RouterStyles();
	
	//useState

	return (
		<Router history={history} >
			<div className={classes.mainRoot}>
				<Grid container justify='center'  className={classes.content}>
					<MyRoutes />
				</Grid>
			</div>
		</Router>
	);
}

const useStyles = makeStyles((theme: Theme) => ({

}));

export default (withRoot(withWidth()(Main)));
