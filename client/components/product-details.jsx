import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      product: null

    });
    this.toggleQuantity = this.toggleQuantity.bind(this);
    this.counter = 0;

  }
  componentDidMount() {
    fetch('/api/products.php?id=' + this.props.view.id)
      .then(response => response.json())
      .then(data => {
        this.setState({
          product: data
        });
      }

      );
  }
  toggleQuantity() {
    console.log('product is ', this.state.product);
    console.log('product times 2 is, ', (this.state.product * 2));
    var amount = document.getElementById('amount');
    if (event.target.id === 'add') {
      this.counter++;
      amount.innerHTML = this.counter;
      this.setState({
        product: this.state.product
      });
      console.log('the amount is ', amount);
    } else {
      this.counter--;
      amount.innerHTML = this.counter;
    }
  }

  render() {
    if (this.state.product) {
      return (
        <div className="col-md-4">
          <div className="info-window d-flex justify-content-center" style={{ 'width': '100vw' }}>
            <div onClick={() => { this.props.setView('catalog', {}); }} className="mt-5" >{'Back to catalog'}</div>

            <img className="mt-5 ml-5" style={{ 'height': '40vh', 'width': '40vw' }} src={this.state.product.image} alt="Bad Image" />
            <div className="ml-5" style={{ 'width': '10vw' }}>
              <h5 className="mt-5">{this.state.product.name}</h5>
              <div>
                <button id='subtract' onClick={this.toggleQuantity}>-</button>
                <div id="amount">{this.counter}</div>
                <button id='add' onClick={this.toggleQuantity}>+</button>
              </div>
              <button onClick={() => { this.props.addToCart(this.state.product); }} >Add to Cart</button>
              <p className="mt-5 text-secondary">$ {((this.state.product.price) / 100).toFixed(2)}</p>
              <p className="mt-5">{this.state.product.shortDescription}</p>
            </div>

          </div>
          <div className="d-flex justify-content-center" style={{ 'width': '100vw' }}>
            <p className="mt-5 col-5 col-md-5">{this.state.product.longDescription}</p>
          </div>
        </div>
      );

    } else {
      return null;
    }
  }
}

export default ProductDetails;
