import React, { Component } from "react";
import { Container } from "reactstrap";
import Navi from "../Navi/Navi";
import Dashboard from "./Dashboard";
import { Route, Switch } from "react-router-dom";
import CartDetail from "../Cart/CartDetail";

class App extends Component {
  render() {
    return (
      <Container>
        <Navi />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/product" exact component={Dashboard} />
          <Route path="/cart" exact component={CartDetail} />
        </Switch>
      </Container>
    );
  }
}

export default App;
