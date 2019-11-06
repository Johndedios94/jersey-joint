import React from 'react';

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
    // var nameCheck = false;
    // var cardCheck = false;
    // var addressCheck = false;
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
    event.preventDefault();
    var ccvalidation = document.getElementById('ccvalidation');
    if (event.currentTarget.id === 'name') {
      this.setState({ name: event.target.value });
    } else if (event.currentTarget.id === 'creditcard') {
      this.setState({ creditcard: event.target.value });
      if (this.state.creditcard.length >= 15) {
        ccvalidation.innerHTML = 'Valid!';
      } else {
        ccvalidation.innerHTML = 'Must be a valid 16 digit credit card number.';
      }
    } else if (event.currentTarget.id === 'address') {
      this.setState({ address: event.target.value });
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
    debugger;
    var error = document.getElementById('error');
    if (this.state.name && this.state.creditcard && this.state.address) {
      this.props.setView('cartConfirmation', {});
      this.props.deleteCart(this.props.cartItems);
    } else {
      error.innerHTML = 'Please fill out all fields with valid information!';
    }
  }

  render() {
    console.log('cart item props are', this.props.cartItems);
    return (
      <div className="background">
        <div onClick={() => { this.props.setView('catalog', {}); }} className="mt-0 catalogButton" >
          Back to Catalog</div>
        <div className="card mx-auto col-5 detailsContainer " style={{ 'maxWidth': '940px' }}>
          <h5>Item total: ${this.totalprice()}</h5>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input type="name" className="form-control form" id="name" placeholder="Enter Name" onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Credit Card</label>
              <input type="text" className="form-control form" id="creditcard" placeholder="Enter Credit Card Number" onChange={this.handleChange}/>
              <label style={{ 'color': 'blue' }} id="ccvalidation" htmlFor="exampleInputEmail1">Must be a valid 16 digit credit card number.</label>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Shipping Address</label>
              <input type="text" className="form-control form" id="address" aria-describedby="emailHelp" placeholder="Enter Shipping Address" onChange={this.handleChange} />
            </div>
            <label id="error"></label>
          </form>
          <button onClick={() => { this.validInputCheck(); }} type="button" className="placeOrder mx-auto" >Place Order</button>
        </div>
      </div>
    );
  }
}

export default Checkoutform;
