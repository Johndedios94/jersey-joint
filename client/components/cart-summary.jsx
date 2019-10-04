import React from 'react';
import CartSummaryItem from './cart-summary-item';

class CartSummary extends React.Component {

  totalprice() {
    var total = 0;
    for (var i = 0; i < this.props.cartItems.length; i++) {
      total += this.props.cartItems[i].price;
    }
    return (total / 100).toFixed(2);
  }

  render() {
    const cartItem = this.props.cartItems.map(key => {
      return (
        <CartSummaryItem
          key={key}
          id={key.id}
          name={key.name}
          price={key.price}
          image={key.image}
          shortDescription={key.shortDescription}
          longDescription={key.longDescription}
        />
      );
    });
    return (
     <>
      <h5 onClick={() => { this.props.setView('catalog', {}); }} className="mt-5" >{'Back to catalog'}</h5>
      <div className="mx-auto" style={{ 'width': '50vw' }}>
        <h1>My Cart</h1>
        <div>{cartItem}</div>
        <h5>Item total ${this.totalprice()}</h5>
      </div>
      </>
    );
  }
}

export default CartSummary;
