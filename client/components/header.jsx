import React from 'react';

class Header extends React.Component {
  cartAmount() {
    var count = 0;
    for (var i = 0; i < this.props.cartItemCount.length; i++) {
      count += parseInt(this.props.cartItemCount[i].count);
    }
    return count;
  }

  render() {
    return (
      <div className='mainHeader'>
        <div className='headerText'>The Jersey Joint</div>
        <img className='checkout' src='./images/greyCart.png' onClick={() => this.props.setView('cart', {})}></img>
        <div className='addItem' onClick={() => this.props.setView('cart', {})} >
          {this.cartAmount()}
        </div>
      </div>
    );
  }
}

export default Header;
