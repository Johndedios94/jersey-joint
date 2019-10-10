import React from 'react';
import CartConfirmationItem from './cart-confirmation-item';

class CartConfirmation extends React.Component {
  totalprice() {
    var total = 0;
    for (var i = 0; i < this.props.finalCart.length; i++) {
      total += parseInt(this.props.finalCart[i].price * this.props.finalCart[i].count);
    }
    var cartTotal = (total / 100).toFixed(2);
    return cartTotal;
  }

  render() {
    console.log('cart summary item props ', this.props.finalCart);
    const cartItem = this.props.finalCart.map(item => {
      return (
        <CartConfirmationItem
          key = {item}
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
    return (
        <>
          <h5 onClick={() => { this.props.setView('catalog', {}); }} className="mt-1" >{'Back to catalog'}</h5>
          <div className="mx-auto" style={{ 'width': '50vw' }}>
            <h1>Thank you for your purchase!</h1>
            <div>Order Summary</div>
            <div>{cartItem}</div>
            <h5>Item total ${this.totalprice()}
              <button className="button" onClick={() => { this.props.setView('checkout', {}); }}></button></h5>
          </div>
        </>
    );
  }
  // }
}

export default CartConfirmation;
