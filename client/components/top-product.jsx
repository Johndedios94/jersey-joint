import React from 'react';

class Topproduct extends React.Component {
  render() {
    return (
      <div className="row no-gutters" style={{ 'border-bottom': '2px solid black' }}>
        <div className="col-sm-6 col-12" >
          <img className="img-fluid" src="/images/drake.jpg" alt=""/>
        </div>
        <div className="col-sm-6 col-12" >
          <div className="customerReview">Customer Reviews!</div>
          <div className="topProductDesc">
            "When it comes to supporting the 6, i always go to the Jersey Joint for my jersey needs.
            Their prices are the best, and their customer service is great! They always hook it up, and i stay
            looking fresh with their gear, buy a jersey from them today! "
            -Drake
          </div>
        </div>
      </div>

    );
  }
}

export default Topproduct;
