import React from "react"
import { Router } from "react-router-dom"
import App from "../App"
import { createGlobalStyle } from "styled-components"
import createSagaMiddleware from "redux-saga"
import { applyMiddleware, createStore } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer, { rootSaga } from "../modules"
import { createBrowserHistory } from 'history'
import ReduxThunk from 'redux-saga'

const customHistory = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware({
    context: { history: customHistory }
})

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
      ReduxThunk.apply({ history: customHistory }),
      sagaMiddleware
  ))
);

sagaMiddleware.run(rootSaga);

const Root: React.FC = () => {
  return (
    <Router history={customHistory}>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </Router>
  );
};
export default Root;
