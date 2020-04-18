import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/product/:id" exact component={ProductScreen} />
          <Route path="/" exact component={HomeScreen} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
