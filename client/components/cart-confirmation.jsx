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
        <div onClick={() => { this.props.setView('catalog', {}); }} className="mt-2 catalogButton" >
          Back to Catalog</div>
          <div className="mx-auto">
            <h1 className="name">Thank you for your purchase!</h1>
            <div className="orderSummaryText">Order Summary: Your total is ${this.totalprice()}</div>
            {/* <h5 className="total">Item total ${this.totalprice()}</h5> */}
            <div className="scroll">
              <div>{cartItem}</div>
            </div>
          </div>
        </>
    );
  }
  // }
}

export default CartConfirmation;
