import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      product: null
    });
  }
  componentDidMount() {
    fetch('/api/products.php?id=1')
      .then(response => response.json())
      .then(data => {
        this.setState({
          product: data
        });
        console.log('data ', this.state.product);
      }

      );
  }
  render() {
    if (!this.state.product) {
      return (
        <div>{this.state.product}</div>
      );
    } else {
      return null;
    }
  }
}

export default ProductDetails;
