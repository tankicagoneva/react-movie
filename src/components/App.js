import React from "react";
import { Router } from "@reach/router";

import Header from "./elements/Header.js";
import Home from "./Home";
import Movie from "./Movie.js";
import NotFound from "./NotFound";

import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => (
  <>
    <Header />
    <Router>
      <Home path="/" />
      <Movie path="/:movieId" />
      <NotFound default />
    </Router>
    <GlobalStyle />
  </>
);

export default App;
