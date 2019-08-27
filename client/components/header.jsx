import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className='headerbg'>
        <h1 className='header'>Wicked Sales</h1>
        <div className='cart'></div>
        <p className="addItem">{this.props.cartItemCount} items</p>
        <div className='cart2'></div>
      </div>
    );
  }
}

export default Header;
