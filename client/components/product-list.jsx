import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.getProducts = this.getProducts.bind(this);
  }
  componentDidMount() {
    this.getProducts();
  }
  getProducts() {
    fetch('/api/products.php')
      .then(response => { return response.json(); })
      .then(data => {
        console.log('data', data);
        this.setState({ products: data });
      });

  }

  render() {
    console.log(' product list is ', this.state.products);
    // console.log(' id is  ', this.state.products[0].image);
    const product = this.state.products.map(item => {
      // console.log(' id is  ', this.state.products[0].id );
      return (
        <ProductListItem
          id={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
          shortDescription={item.shortDescription}
          // longDescription={item.longDescription}
          setView={this.props.setView}
        />
      );
    });
    return (
      <div className="jerseyContainer" >

        {product}

      </div>);
  }
}

export default ProductList;
