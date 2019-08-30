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
  }
  totalprice() {
    var total = 0;
    for (var i = 0; i < this.props.cartItems.length; i++) {
      total += this.props.cartItems[i].price;
    }
    var cartTotal = (total / 100).toFixed(2);
    return cartTotal;
  }
  handleChange(event) {
    event.preventDefault();
    if (event.currentTarget.id === 'name') {
      this.setState({ name: event.target.value });
    } else if (event.currentTarget.id === 'creditcard') {
      this.setState({ creditcard: event.target.value });
    } else if (event.currentTarget.id === 'address') {
      this.setState({ address: event.target.value });
    }
  }

  render() {
    return (
      <>
        <div className="mx-auto col-5" style={{ 'width': '80vw' }}>
          <h5>Item total ${this.totalprice()}</h5>
          <form onSubmit={() => {
            this.props.placeOrder({
              name: this.state.name,
              creditcard: this.state.creditcard,
              address: this.state.creditcard,
              cart: this.props.cartItems
            });
          }}>
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
            <button type="submit" className="placeOrder">Place Order</button>
          </form>
        </div>
      </>
    );
  }
}

export default Checkoutform;
