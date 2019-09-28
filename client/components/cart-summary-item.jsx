import React from 'react';

class CartSummaryItem extends React.Component {
  render() {
    return (
      <div className="card mb-3" style={{ 'maxWidth': '940px' }} >
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={this.props.image} className="card-img" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{this.props.name}</h5>
              <p className="card-text">${(this.props.price / 100).toFixed(2)}</p>
              <p className="card-text"><small className="text-muted">{this.props.shortDescription}</small></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartSummaryItem;
