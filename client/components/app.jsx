import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import Checkoutform from './checkoutform';
import Jumbotron from './Jumbotron';
import Topproduct from './top-product';
import CartConfirmation from './cart-confirmation';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: [],
      finalCart: [],
      modal: true
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.deleteCart = this.deleteCart.bind(this);
    this.updateCart = this.updateCart.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.cartConfirmation = this.cartConfirmation.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  cartConfirmation(finalCart) {
    this.setState({
      finalCart: finalCart
    });
  }

  deleteItem(id) {
    var updateCart = [];
    updateCart.push(fetch('/api/cart_deleteItem.php', {
      method: 'DELETE',
      body: JSON.stringify({
        id: id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json()));
    Promise.allSettled(updateCart).then(this.getCartItems);
  }
  updateCart(id, count) {
    var updateCart = [];
    updateCart.push(fetch('/api/cart_update_quantity.php', {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        count: count
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json()));
    Promise.allSettled(updateCart).then(this.getCartItems);

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
  addToCart(prodct, count) {
    var cartAdd = [];
    cartAdd.push(fetch('/api/cart.php', {
      method: 'POST',
      body: JSON.stringify({
        product: prodct,
        count: count
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json()));
    Promise.allSettled(cartAdd).then(this.getCartItems);
    console.log('added and got');

  }

  getCartItems() {
    fetch('/api/cart.php')
      .then(response => response.json())
      .then(data => {
        this.setState({
          cart: data
        });
      });

  }

  deleteCart() {
    var deletedCart = [];
    deletedCart.push(fetch('api/cart_delete.php', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify()
    })
      .then(response => response.json));
    Promise.allSettled(deletedCart).then(this.getCartItems);
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
          <div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Hi Welcome to Jersey Joint!</ModalHeader>
              <ModalBody>
                <div className="modaltext">This site is for demonstration purposes only. Please do not input real credit card or shipping information upon checkout! </div>
                <div className="modaltext">Thank you!</div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={() => { this.toggle(); }}>Continue to Jersey Joint</Button>
              </ModalFooter>
            </Modal>
          </div>
          <Jumbotron />
          <Header cartItemCount={this.state.cart} setView={this.setView} />
          <Topproduct />
          <ProductList setView={this.setView} />
        </div>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <div>
          <Header cartItemCount={this.state.cart} setView={this.setView} />
          <ProductDetails addToCart={this.addToCart} view={this.state.view.params} setView={this.setView} />
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div>
          <Header cartItemCount={this.state.cart} setView={this.setView} />
          <CartSummary getCart={this.getCartItems} cartConfirmation={this.cartConfirmation} deleteItem={this.deleteItem} updateCart={this.updateCart} cartItems={this.state.cart} setView={this.setView} />
        </div>
      );
    } else if (this.state.view.name === 'checkout') {
      return (
        <div>
          <Header cartItemCount={this.state.cart} setView={this.setView} />
          <Checkoutform deleteCart={this.deleteCart} cartItems={this.state.cart} setView={this.setView} placeOrder={this.placeOrder} />
        </div>
      );
    } else if (this.state.view.name === 'cartConfirmation') {
      return (
        <div>
          <Header cartItemCount={this.state.cart} setView={this.setView} />
          <CartConfirmation finalCart={this.state.finalCart} deleteCart={this.deleteCart} cartItems={this.state.cart} setView={this.setView} placeOrder={this.placeOrder} />
        </div>
      );
    }
  }
}
