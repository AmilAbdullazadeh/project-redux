import React, { Component } from "react";
import { connect } from "react-redux";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";

class CartSummery extends Component {
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
  }

  renderEmpty() {
    return (
      <NavItem>
        <NavLink> Your cart is empty </NavLink>
      </NavItem>
    );
  }

  renderSummery() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your cart
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <Badge
                color="danger"
                className="mr-2"
                onClick={() => this.removeFromCart(cartItem.product)}
              >
                X
              </Badge>
              {cartItem.product.productName}
              <Badge className="ml-2" color="success">
                {cartItem.quantity}
              </Badge>
            </DropdownItem>
          ))}
          <DropdownItem>
          <Link to="/cart">Go to cart</Link>
        </DropdownItem>
        </DropdownMenu>
        
      </UncontrolledDropdown>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummery() : this.renderEmpty()}
      </div>
    );
  }
}

function mapSatetToProps(state) {
  return { cart: state.cartReducer };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

export default connect(mapSatetToProps, mapDispatchToProps)(CartSummery);
