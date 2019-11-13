import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: parseInt(this.props.count),
      modal: false
    };
    this.toggleQuantity = this.toggleQuantity.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleQuantity() {
    var count;
    if (event.target.id === 'add') {
      count = this.state.count += 1;
      this.setState({ count: count });
    } else {
      if (this.state.count === 1) {
        count = this.state.count = 1;
        this.setState({ count: count });
      } else {
        count = this.state.count -= 1;
        this.setState({ count: count });
      }
    }
  }
  render() {
    return (
      <div className="thecartcontainer">
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Cart updated!</ModalHeader>
          </Modal>
        </div>
        <div className="card my-2 p-4 cartSummaryContainer"  >
          <div className="row no-gutters">
            <div className="col-lg-4 col-md-7 col-sm-4">
              <img src={this.props.image} className="card-img" alt="..." />
            </div>
            <div className="col-lg-8 col-md-12 col-sm-8">
              <div className="detailsInfo">
                <h5 className="card-title name">{this.props.shortDescription}</h5>
                <p className="card-text price">${(this.props.price / 100).toFixed(2)}</p>
                <div>
                  <button onClick={this.toggleQuantity} id='subtract' type="button" className="operator">-</button>
                  <div id="amount"> {this.state.count}</div>
                  <button onClick={this.toggleQuantity} id='add' type="button" className="operator">+</button>
                </div>
                <div>
                  <button className="deleteButton mt-4 mr-2" onClick={() => { this.props.deleteItem(this.props.itemid); }} >Delete</button>
                  <button className="updateButton mt-4" onClick={() => { this.props.updateCart(this.props.itemid, this.state.count); this.toggle(); }} >Update</button>
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
