import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';

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
  }

  componentDidMount() {
    this.getCartItems();
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
      .then(data => this.setState({
        cart: data
      }));

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
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} setView={this.setView}/>
          <ProductList setView={this.setView} />
        </div>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} setView={this.setView}/>
          <ProductDetails addToCart={this.addToCart} view={this.state.view.params} setView={this.setView}/>
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} setView={this.setView} />
          <CartSummary cartItems={this.state.cart} setView={this.setView}/>
        </div>
      );
    }
  }
}
