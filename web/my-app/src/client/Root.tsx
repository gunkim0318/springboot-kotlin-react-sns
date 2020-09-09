import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`
const Root: React.FC = () => {
  return (
      <BrowserRouter>
          <GlobalStyle/>
          <App />
      </BrowserRouter>
  );
};
export default Root;
