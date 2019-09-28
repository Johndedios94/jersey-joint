import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className='mainHeader'>
        <div className='headerText'>The Jersey Joint</div>
        {/* <div className='cart' onClick={() => this.props.setView('cart', {})}></div> */}
        <img className='checkout' src='./images/greyCart.png' onClick={() => this.props.setView('cart', {})}></img>

        <div className='addItem' onClick={() => this.props.setView('cart', {})} >
          {this.props.cartItemCount} items
        </div>
      </div>
    );
  }
}

export default Header;
