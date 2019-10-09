import React from 'react';

class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 0
  //   };
  //   this.cartAmount = this.cartAmount.bind(this);
  // }

  // componentDidMount() {
  //   this.cartAmount();
  // }

  cartAmount() {
    var count = 0;
    for (var i = 0; i < this.props.cartItemCount.length; i++) {
      count += parseInt(this.props.cartItemCount[i].count);
    }
    // this.setState({ count: count });
    return count;
  }

  render() {
    return (
      <div className='mainHeader'>
        <div className='headerText'>The Jersey Joint</div>
        {/* <div className='cart' onClick={() => this.props.setView('cart', {})}></div> */}
        <img className='checkout' src='./images/greyCart.png' onClick={() => this.props.setView('cart', {})}></img>

        <div className='addItem' onClick={() => this.props.setView('cart', {})} >
          {this.cartAmount()} items
        </div>
      </div>
    );
  }
}

export default Header;
