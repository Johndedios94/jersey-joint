import React from 'react';
import Header from './header';
import ProductList from './product-list-item';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <ProductList/>
      </div>
    );
  }
}
