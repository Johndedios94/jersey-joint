import React from 'React';
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
    const product = this.state.products.map(key => {
      return (
        <ProductListItem
          key={key}
          id={key.id}
          name={key.name}
          price={key.price}
          image={key.image}
          description={key.shortDescription}
        />
      );
    });
    return (
      <div className="row">
        {product}
      </div>
    );
  }
}

export default ProductList;
