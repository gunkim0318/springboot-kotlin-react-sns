// import { Typography } from "@material-ui/core";
import * as React from "react";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import configureStore from "./configureStore";

const { store } = configureStore();

function ReduxRoot() {
	return (
		<Provider store={store}>
			{/* <PersistGate
				loading={<Typography>Loading...</Typography>}
				persistor={persistor}
			>
			</PersistGate> */}
			<App />
		</Provider>
	);
}

export default ReduxRoot;
