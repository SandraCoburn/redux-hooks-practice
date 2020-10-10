import React from "react";
import { Route } from "react-router-dom";

import Navigation from "./components/Nav/Navigation";

const App = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Route path="/" />
        <Route path="/favorites" />
      </main>
    </React.Fragment>
  );
};

export default App;
