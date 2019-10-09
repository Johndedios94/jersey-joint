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
    if (event.currentTarget.id === 'name') {
      this.setState({ name: event.target.value });
    } else if (event.currentTarget.id === 'creditcard') {
      this.setState({ creditcard: event.target.value });
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

  render() {
    console.log('cart item props are', this.props.cartItems);
    return (
      <>
        <div className="mx-auto col-5" style={{ 'width': '80vw' }}>
          <h5>Item total ${this.totalprice()}</h5>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input type="name" className="form-control form" id="name" placeholder="Enter Name" onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Credit Card</label>
              <input type="text" className="form-control form" id="creditcard" placeholder="Enter Credit Card Number" onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Shipping Address</label>
              <input type="text" className="form-control form" id="address" aria-describedby="emailHelp" placeholder="Enter Shipping Address" onChange={this.handleChange} />
            </div>
            <span onClick={() => { this.props.setView('catalog', {}); }} className="mt-5" >{'< Continue Shopping'}</span>
            <button onClick={() => { this.props.setView('cartConfirmation', {}); this.props.deleteCart(this.props.cartItems); }} type="button" className="placeOrder">Place Order</button>
          </form>
        </div>
      </>
    );
  }
}

export default Checkoutform;
