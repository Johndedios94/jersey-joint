import React from 'react';

function ProductListItem(props) {
  return (
    <div onClick={console.log('ShakeWeight')}className="card" style={{ width: '18rem' }}>
      <img src={props.image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">${(props.price / 100).toFixed(2)}</p>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}

export default ProductListItem;
