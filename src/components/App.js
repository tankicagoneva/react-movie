import React from "react";

import Header from "./elements/Header.js";
import Home from "./Home";

import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => (
  <>
    <Header />
    <Home />
    <GlobalStyle />
  </>
);

export default App;
