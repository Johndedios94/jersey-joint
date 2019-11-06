import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 jumbotronText">The Jersey Joint</h1>
            {/* <p className="lead"></p> */}
          </div>
        </div>
      </div>
    );

    // return (
    //   <div className='headerbg'>
    //     <h1 className='header'>Wicked Sales</h1>
    //     <div className='cart'></div>
    //     <p className="addItem">{this.props.cartItemCount} items</p>
    //     <div className='cart2' onClick={() => this.props.setView('cart', {})}></div>
    //   </div>
    // );
  }
}

export default Header;
