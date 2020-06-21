import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import CategoryList from "../Categories/CategoryList";
import PorductList from "../Products/PorductList";

class Dashboard extends Component {
  render() {
    return (
      <Row>
        <Col xs="3">
          <CategoryList />
        </Col>
        <Col xs="9">
          <PorductList />
        </Col>
      </Row>
    );
  }
}

export default Dashboard;
