import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge } from "reactstrap";

class PorductList extends Component {
  render() {
    return (
      <h3>
        Products
        <Badge color="success">
          {this.props.currentCategory.categoryName}{" "}
        </Badge>
      </h3>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
  };
}

export default connect(mapStateToProps)(PorductList);
