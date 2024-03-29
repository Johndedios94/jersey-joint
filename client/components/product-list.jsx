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
        this.setState({ products: data });
      });

  }

  render() {
    const product = this.state.products.map(item => {
      return (
        <ProductListItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
          shortDescription={item.shortDescription}
          longDescription={item.longDescription}
          setView={this.props.setView}
        />
      );
    });
    return (
      <div className="row">
        {product}
      </div>);
  }
}

export default ProductList;
