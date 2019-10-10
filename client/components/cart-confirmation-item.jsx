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

      <div>
        <div className="card my-2 p-4 detailsContainer" style={{ 'maxWidth': '940px' }} >
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={this.props.image} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="detailsInfo">
                <h5 className="card-title name ">{this.props.shortDescription}</h5>
                <p className="card-text price">${(this.props.price / 100).toFixed(2)}</p>
                <div>
                  <div className="card-text price"> Quantity: {this.state.count}</div>
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
