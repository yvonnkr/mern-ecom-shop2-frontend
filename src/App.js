import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import ProfileScreen from "./screens/ProfileScreen";
import OrdersScreen from "./screens/OrdersScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/products" component={ProductsScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/orders" component={OrdersScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/category/:id" component={HomeScreen} />
          <Route path="/signin" component={SigninScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/" exact component={HomeScreen} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
