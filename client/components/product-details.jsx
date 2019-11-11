import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      product: null,
      modal: false

    });
    this.toggleQuantity = this.toggleQuantity.bind(this);
    this.counter = 1;
    this.modalClass = null;
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    fetch('/api/products.php?id=' + this.props.view.id)
      .then(response => response.json())
      .then(data => {
        this.setState({
          product: data
        });
      });
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleQuantity() {
    var amount = document.getElementById('amount');
    if (event.target.id === 'add') {
      this.counter++;
      amount.text = this.counter;
      this.setState({
        product: this.state.product
      });
    } else {
      if (this.counter === 1) {
        this.counter = 1;
      } else {
        this.counter--;
      }
      amount.innerHTML = this.counter;
    }
  }

  render() {
    if (this.state.product) {
      return (
        <div className="background">
          <div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Added to Cart!</ModalHeader>
              <ModalBody>
                <div className="modaltext">Product: {this.state.product[0].name}</div>
                <div className="modaltext">Quantity: {this.counter}</div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={() => { this.props.setView('cart', {}); this.toggle(); }}>Go To Cart</Button>
                <Button color="primary" onClick={() => { this.props.setView('catalog', {}); this.toggle(); }}>Continue Shopping</Button>
              </ModalFooter>
            </Modal>
          </div>
          <div onClick={() => { this.props.setView('catalog', {}); }} className="mt-0 catalogButton" >
            Back to catalog</div>
          <div className="card my-3 p-4 detailsContainer"
            style={{ 'maxWidth': '1240px' }}
          >
            <div className="row no-gutters">
              <div className="col-lg-4 col-md-7 col-sm-4">
                <img src={this.state.product[0].image} className="card-img" alt="jersey" />
              </div>
              <div className="col-lg-8 col-md-12 col-sm-8">
                <div className="detailsInfo">
                  <h5 className="card-title name" >{this.state.product[0].shortDescription}</h5>
                  <p className="card-text price">${(this.state.product[0].price / 100).toFixed(2)}</p>
                  <div>
                    <button onClick={this.toggleQuantity} id='subtract' type="button" className="operator">-</button>
                    <div id="amount">{this.counter}</div>
                    <button onClick={this.toggleQuantity} id='add' type="button" className="operator">+</button>
                  </div>
                  <button className="addbutton mt-4" onClick={() => { this.props.addToCart(this.state.product, this.counter); this.toggle(); }} >Add to Cart</button>
                  <p className="mt-4">{this.state.product[0].longDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ProductDetails;
