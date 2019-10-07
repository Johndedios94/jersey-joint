import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import Checkoutform from './checkoutform';
import Jumbotron from './Jumbotron';
import Topproduct from './top-product';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }
  placeOrder(orderObj) {
    fetch('/api/orders.php', {
      method: 'POST',
      body: JSON.stringify(orderObj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ cart: [] });
        this.setView('catalog', {});
      });
  }
  addToCart(prodct) {
    fetch('/api/cart.php', {
      method: 'POST',
      body: JSON.stringify(prodct),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => {
        var newCart = this.state.cart.slice(0);
        newCart.push(json);
        this.setState({ cart: newCart });
      });
  }

  getCartItems() {
    fetch('/api/cart.php')
      .then(response => response.json())
      .then(data => {
        // debugger;
        console.log(' cart data is ', data);
        this.setState({ cart: data })
        ;
      });
  }

  setView(name, params) {
    this.setState({
      view: {
        name,
        params
      }
    });
  }
  render() {
    if (this.state.view.name === 'catalog') {
      console.log(' cart state ', this.state.cart);
      return (
        <div>
          <Jumbotron />
          <Header cartItemCount={this.state.cart} setView={this.setView}/>
          <Topproduct/>
          <ProductList setView={this.setView} />
        </div>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <div>
          <Header cartItemCount={this.state.cart} setView={this.setView}/>
          <ProductDetails addToCart={this.addToCart} view={this.state.view.params} setView={this.setView}/>
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div>
          <Header cartItemCount={this.state.cart} setView={this.setView} />
          <CartSummary cartItems={this.state.cart} setView={this.setView}/>
        </div>
      );
    } else if (this.state.view.name === 'checkout') {
      return (
        <div>
          <Header cartItemCount={this.state.cart} setView={this.setView} />
          <Checkoutform cartItems={this.state.cart} setView={this.setView} placeOrder={this.placeOrder}/>
        </div>
      );
    }
  }
}
