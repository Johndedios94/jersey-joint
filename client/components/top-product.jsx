import React from 'react';

class Topproduct extends React.Component {
  render() {
    return (
      <div className="topProducts">
        <div className="firstTopProduct">
          <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQZCvWS6uChVhFIuMxqfrmLvog-32WpT2rf32qDuF-CQzIVtBB0KPEII3_8ADlh8pQM7Jl2Z9ANRXQIoQBE1Sk8FOCw25gYJTkxHw9W6YN3qj1EYU5fjy29&usqp=CAE" alt=""/>
        </div>
        <div className="topProductsText">
          <h1>Limited Edition!</h1>
          <div classNAme="topProductDesc">
            Kobe Bryants Limited Edition Lower Merion High School Jersey.
            This special jersey is now available for half the price, with twice the swag it usually comes with.
          </div>
        </div>
      </div>

    );
  }
}

export default Topproduct;
