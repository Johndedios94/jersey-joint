import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 className='header'>Wicked Sales</h1>
        <div className='cart'></div>
      </div>
    );
  }
}

export default Header;
