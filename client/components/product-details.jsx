import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      product: null

    });
    this.toggleQuantity = this.toggleQuantity.bind(this);
    this.counter = 1;
    this.modalClass = null;
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
  toggleQuantity() {
    var amount = document.getElementById('amount');
    if (event.target.id === 'add') {
      this.counter++;
      amount.text = this.counter;
      this.setState({
        product: this.state.product
      });
    } else {
      this.counter--;
      amount.innerHTML = this.counter;
    }
  }
  showModal() {
    console.log('hi');
    this.modalClass = 'modalappear';
  }

  render() {
    if (this.state.product) {
      return (
        <div>
          <div onClick={() => { this.props.setView('catalog', {}); }} className="mt-5" >
             Back to Catalog</div>
          <div className="card my-5 p-4 detailsContainer" style={{ 'maxWidth': '940px' }} >
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={this.state.product[0].image} className="card-img" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="detailsInfo">
                  <h5 className="card-title ">{this.state.product[0].shortDescription}</h5>
                  <p className="card-text ">${(this.state.product[0].price / 100).toFixed(2)}</p>
                  <div>
                    <button id='subtract' onClick={this.toggleQuantity}>-</button>
                    <div id="amount">{this.counter}</div>
                    <button id='add' onClick={this.toggleQuantity}>+</button>
                  </div>
                  <button className ="addbutton mt-4" onClick={() => { this.props.addToCart(this.state.product, this.counter); this.showModal() ;}} >Add to Cart</button>
                  <div className="modal">THANK YOU FOR YOUR PURCHASE</div>
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
