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
    console.log('view is ', this.props.view);
    fetch('/api/products.php?id=' + this.props.view.id)
      .then(response => response.json())
      .then(data => {
        console.log('data is ', data);
        this.setState({
          product: data
        });
      }

      );
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
        <div>
          <div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Added to Cart!</ModalHeader>
              <ModalBody>
                <div className="modaltext">Product: {this.state.product[0].name}</div>
                <div className="modaltext">Quantity: {this.counter}</div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={() => { this.props.setView('cart', {}); this.toggle(); }}>Go To Cart</Button>
                <Button color="primary" onClick={this.toggle}>Continue Shopping</Button>
              </ModalFooter>
            </Modal>
          </div>
          <div onClick={() => { this.props.setView('catalog', {}); }} className="mt-2 catalogButton" >
             Back to Catalog</div>
          <div className="card my-5 p-4 detailsContainer" style={{ 'maxWidth': '940px' }} >
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={this.state.product[0].image} className="card-img" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="detailsInfo">
                  <h5 className="card-title name" >{this.state.product[0].shortDescription}</h5>
                  <p className="card-text price">${(this.state.product[0].price / 100).toFixed(2)}</p>
                  <div>
                    <button onClick={this.toggleQuantity} id='subtract'type="button" className="operator">-</button>
                    <div id="amount">{this.counter}</div>
                    <button onClick={this.toggleQuantity} id='add' type="button" className="operator">+</button>
                  </div>
                  <button className ="addbutton mt-4" onClick={() => { this.props.addToCart(this.state.product, this.counter); this.toggle(); }} >Add to Cart</button>
                  <p className="mt-4 longDesc">{this.state.product[0].longDescription}</p>
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

// <div className="col-md-4">
//   <div className="info-window d-flex justify-content-center" style={{ 'width': '100vw' }}>
//     <div onClick={() => { this.props.setView('catalog', {}); }} className="mt-5" >{'Back to catalog'}</div>

//     <img className="mt-5 ml-5" style={{ 'height': '40vh', 'width': '20vw' }} src={this.state.product[0].image} alt="Bad Image" />
//     <div className="ml-5" style={{ 'width': '10vw' }}>
//       <h5 className="mt-5">{this.state.product[0].name}</h5>
//       <div>
//         <button id='subtract' onClick={this.toggleQuantity}>-</button>
//         <div id="amount">{this.counter}</div>
//         <button id='add' onClick={this.toggleQuantity}>+</button>
//       </div>
//       <button onClick={() => { this.props.addToCart(this.state.product); }} >Add to Cart</button>
//       <p className="mt-5 text-secondary">$ {((this.state.product[0].price) / 100).toFixed(2)}</p>
//       <p className="mt-5">{this.state.product[0].shortDescription}</p>
//     </div>

//   </div>
//   <div className="d-flex justify-content-center" style={{ 'width': '100vw' }}>
//     <p className="mt-5 col-5 col-md-5">{this.state.product.longDescription}</p>
//   </div>
// </div>
