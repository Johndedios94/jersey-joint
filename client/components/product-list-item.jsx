import React from 'react';

class ProductList extends React.Component {
  render() {
    return (
      <div className="card" style={{ width: '18rem' }}>
        <img src="https://images.bergdorfgoodman.com/ca/1/product_assets/X/4/E/X/M/BGX4EXM_mu.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Shoes</h5>
          <p className="card-text">$500</p>
          <p className="card-text">This is a description for shoes. These shoes were made for walking and thats just what theyll do.</p>
        </div>
      </div>
    );
  }
}

export default ProductList;
