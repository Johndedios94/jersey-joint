import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 jumbotronText">The Jersey Joint</h1>
            <a href="#productSection">Click me to see the Jerseys!
              <br></br>
              <i className="fas fa-angle-double-down"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
