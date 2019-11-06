import React from 'react';

class Topproduct extends React.Component {
  render() {
    return (
      <div className="topProducts">
        <div className="firstTopProduct">
          {/* <img className="stockPic" src="/images/drake.jpg" alt=""/> */}
        </div>
        <div className="top2products" >
          <div className="customerReview">Customer Reviews!</div>
          <div className="topProductDesc">
            "When it comes to supporting the 6, i always go to the Jersey Joint for my jersey needs.
            Their prices are the best, and their customer service is great! "
            -Drake
          </div>
          {/* <div className="stars" ></div> */}
        </div>
      </div>

    );
  }
}

export default Topproduct;
