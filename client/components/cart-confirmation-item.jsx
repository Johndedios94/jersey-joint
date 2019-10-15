import React from 'react';

class CartConfirmationItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: parseInt(this.props.count)
    };
    this.toggleQuantity = this.toggleQuantity.bind(this);

    // this.quantity = parseInt(this.props.count);

  }
  toggleQuantity() {
    if (event.target.id === 'add') {
      var updateCount = this.state.count += 1;
      this.setState({ count: updateCount });
    } else {
      var decrementCount = this.state.count -= 1;
      this.setState({ count: decrementCount });
    }
  }
  render() {
    return (

      <div className="thecartcontainer">
        <div className="card my-2 p-4 cartConfirmationContainer">
          <div className="row no-gutters">
            <div className="col-lg-4 col-md-7 col-sm-4">
              <img src={this.props.image} className="card-img confirmationimg" alt="..." />
            </div>
            <div className="col-lg-8 col-md-12 col-sm-8">
              <div className="detailsInfo">
                <h5 className="card-title name ">{this.props.shortDescription}</h5>
                <p className="card-text price">${(this.props.price / 100).toFixed(2)}</p>
                <div>
                  <div className="card-text" style={{ 'font-family': 'cambria', 'font-size': '1.5rem' }}> Quantity: {this.state.count}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartConfirmationItem;
