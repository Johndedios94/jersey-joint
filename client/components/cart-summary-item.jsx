import React from 'react';

class CartSummaryItem extends React.Component {
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
        <div className="card my-2 p-4 detailsContainer" style={{ 'minWidth': '930px' }} >
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={this.props.image} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="detailsInfo">
                <h5 className="card-title name">{this.props.shortDescription}</h5>
                <p className="card-text price">${(this.props.price / 100).toFixed(2)}</p>
                <div>
                  <button onClick={this.toggleQuantity} id='subtract' type="button" className="operator">-</button>
                  {/* <button id='subtract' onClick={this.toggleQuantity}>-</button> */}
                  <div id="amount"> {this.state.count}</div>
                  {/* <button id='add' onClick={this.toggleQuantity}>+</button> */}
                  <button onClick={this.toggleQuantity} id='add' type="button" className="operator">+</button>
                </div>
                <div>
                  <button className="deleteButton mt-4 mr-2" onClick={() => { this.props.deleteItem(this.props.itemid); }} >Delete</button>
                  <button className="updateButton mt-4" onClick={() => { this.props.updateCart(this.props.itemid, this.state.count); }} >Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartSummaryItem;
