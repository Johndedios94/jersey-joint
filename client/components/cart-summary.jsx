import React from 'react';
import CartSummaryItem from './cart-summary-item';

class CartSummary extends React.Component {
  totalprice() {
    console.log('price is ', this.props.cartItems);
    debugger;
    var total = 0;
    for (var i = 0; i < this.props.cartItems.length; i++) {
      total += parseInt(this.props.cartItems[i].price * this.props.cartItems[i].count);
    }
    var cartTotal = (total / 100).toFixed(2);
    return cartTotal;
  }

  render() {
    console.log('cart summary item props ', this.props.cartItems);
    const cartItem = this.props.cartItems.map(item => {
      return (
        <CartSummaryItem
          count={item.count}
          item={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
          shortDescription={item.shortDescription}
          longDescription={item.longDescription}
        />
      );
    });
    if (!this.props.cartItems.length) {
      return (
        <>
          <h5 onClick={() => { this.props.setView('catalog', {}); }} className="mt-5" >{'Back to catalog'}</h5>
          <div className="mx-auto" style={{ 'width': '50vw' }}>
            <h1>Your cart is Empty</h1>
          </div>
        </>
      );
    } else {
      return (
     <>
      <h5 onClick={() => { this.props.setView('catalog', {}); }} className="mt-5" >{'Back to catalog'}</h5>
      <div className="mx-auto" style={{ 'width': '50vw' }}>
        <h1>My Cart</h1>
        <div>{cartItem}</div>
        <h5>Item total ${this.totalprice()} <button className="button" onClick={() => { this.props.setView('checkout', {}); }}>Checkout</button></h5>
      </div>
      </>
      );
    }
  }
}

export default CartSummary;
