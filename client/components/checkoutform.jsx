import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

class Checkoutform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditcard: '',
      address: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validInputsCheck = this.validInputCheck.bind(this);
  }

  totalprice() {
    var total = 0;
    for (var i = 0; i < this.props.cartItems.length; i++) {
      total += parseInt(this.props.cartItems[i].price * this.props.cartItems[i].count);
    }
    var cartTotal = (total / 100).toFixed(2);
    return cartTotal;
  }

  handleChange(event) {
    var letterRegex = RegExp(
      /^[A-Za-z]{2,}$/
    );
    var ccRegex = RegExp(
      /^[0-9]{16,}$/
    );
    var addressRegex = RegExp(
      /^[A-Za-z0-9,. ]{15,}$/
    );
    var currentInput = event.target.value;
    var ccValidation = document.getElementById('ccValidation');
    var nameValidation = document.getElementById('nameValidation');
    var addressValidation = document.getElementById('addressValidation');
    if (event.currentTarget.id === 'name') {
      if (letterRegex.test(currentInput)) {
        this.setState({ name: currentInput });
        nameValidation.innerHTML = 'Valid!';
      } else {
        nameValidation.innerHTML = 'Please enter a valid name';
      }
    } else if (event.currentTarget.id === 'creditcard') {
      if (ccRegex.test(currentInput)) {
        this.setState({ creditcard: currentInput });
        ccValidation.innerHTML = 'Valid!';
        onkeydown = 'return false';
      } else {
        ccValidation.innerHTML = 'Must be a valid 16 digit credit card number.';
      }
    } else if (event.currentTarget.id === 'address') {
      if (addressRegex.test(currentInput)) {
        this.setState({ address: event.target.value });
        addressValidation.innerHTML = 'Valid!';
      } else {
        addressValidation.innerHTML = 'Please enter a valid address';
      }
    }
  }

  handleSubmit() {
    event.preventDefault();
    var orderObj = {
      name: this.state.name,
      creditcard: this.state.creditcard,
      address: this.state.creditcard,
      cart: this.props.cartItems
    };
    this.props.placeOrder(orderObj);
  }

  validInputCheck() {
    var error = document.getElementById('error');
    if (this.state.name && this.state.creditcard && this.state.address) {
      this.props.setView('cartConfirmation', {});
      this.props.deleteCart(this.props.cartItems);
    } else {
      error.innerHTML = 'Please fill out all fields with valid information!';
    }
  }

  render() {
    return (
      <div className="background">
        <div onClick={() => { this.props.setView('catalog', {}); }} className="mt-0 catalogButton" >
          Back to Catalog</div>
        <div className="card mx-auto col-5 detailsContainer " style={{ 'maxWidth': '940px' }}>
          <h5>Item total: ${this.totalprice()}</h5>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input type="name" className="form-control form" id="name" placeholder="Enter Name" onChange={this.handleChange} />
              <label style={{ 'color': 'blue' }} id="nameValidation" htmlFor="namevalidation"></label>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Credit Card</label>
              <input maxLength="16" type="text" className="form-control form" id="creditcard" placeholder="Enter Credit Card Number" onChange={this.handleChange} />
              <label style={{ 'color': 'blue' }} id="ccValidation"></label>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Shipping Address</label>
              <input type="text" className="form-control form" id="address" aria-describedby="emailHelp" placeholder="Enter Shipping Address" onChange={this.handleChange} />
              <label style={{ 'color': 'blue' }} id="addressValidation"></label>
            </div>
            <label style={{ 'color': 'blue' }}id="error"></label>
          </form>
          <button onClick={() => { this.validInputCheck(); }} type="button" className="placeOrder mx-auto" >Place Order</button>
        </div>
      </div>
    );
  }
}

export default Checkoutform;
