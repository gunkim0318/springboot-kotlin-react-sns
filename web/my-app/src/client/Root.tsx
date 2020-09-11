import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import { createGlobalStyle } from "styled-components";
import createSagaMiddleware from "redux-saga";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "../modules";
import {Provider} from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    background-color: #f1f1f1;
  }
`;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
const Root: React.FC = () => {
  return (
    <BrowserRouter>
        <Provider store={store}>
            <GlobalStyle />
            <App />
        </Provider>
    </BrowserRouter>
  );
};
export default Root;
