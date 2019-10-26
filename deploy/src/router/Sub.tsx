// prettier-ignore
import { withWidth } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { WithWidth } from "@material-ui/core/withWidth";

import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { connect } from "react-redux";
import { Route, RouteComponentProps, Router, Switch } from "react-router-dom";
import { history } from "../configureStore";
import { RootState } from "../reducers/index";
import withRoot from "../withRoot";

//Route
import router from '../router';
import LoginPage from '../layout/sub/login/LoginPage';

interface Props extends RouteComponentProps<void>, WithWidth { }

function Sub(props?: Props) {
	const classes = useStyles();
	
	//useState
	const [ routerArray ] = React.useState([...router])

	return (
		<Router history={history}>
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
		</Router>
	);
}

const useStyles = makeStyles((theme: Theme) => ({

}));

export default (withRoot(withWidth()(Sub)));
