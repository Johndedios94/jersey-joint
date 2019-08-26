import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name,
        params
      }
    });
  }
  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header />
          <ProductList setView={this.setView} />
        </div>
      );
    } else {
      return (
        <div>
          <Header/>
          <ProductDetails view={this.state.view.params} setView={this.setView}/>
        </div>
      );
    }
  }
}
