import React from 'react';
import CartSummaryItem from './cart-summary-item';

class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finalcart: this.props.cartItems
    };
  }
  totalprice() {
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
          deleteItem={this.props.deleteItem}
          updateCart={this.props.updateCart}
          count={item.count}
          itemid={item.id}
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
          <h5 onClick={() => { this.props.setView('catalog', {}); }} className="mt-2 catalogButton" >{'Back to catalog'}</h5>
          <div className="mx-auto" style={{ 'width': '50vw' }}>
            <h1 className="price">Your cart is Empty</h1>
          </div>
        </>
      );
    } else {
      return (
       <>
          <div onClick={() => { this.props.setView('catalog', {}); }} className="mt-2 catalogButton" >{'Back to catalog'}</div>
          <div>
            <div className="cartText">My Cart Total: ${this.totalprice()}</div>
            <div className="scroll " >
              <div>{cartItem}</div>

              <div className="itemCheckout">
                <button className="button" onClick={() => { this.props.setView('checkout', {}); this.props.cartConfirmation(this.state.finalcart); }}>Checkout</button>
              </div>
              <div className="card" style={{ 'width': '18rem' }}>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default CartSummary;
