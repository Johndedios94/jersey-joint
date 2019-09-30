import React from 'react';

function ProductListItem(props) {
  return (
    <div className="card card-style borderItem" style={{ 'width': '25rem', 'height': '55%' }}>
      <img className="card-img-top" style={{ 'height': '22rem' }} src={props.image} alt="..." />
      <div className="card-body" onClick={() => props.setView('details', { id: props.id })}>
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">${(props.price / 100).toFixed(2)}</p>
        <p className="card-text">{props.shortDescription}</p>
        <p className="card-text">{props.longDescription}</p>
      </div>
    </div>
  );
}

export default ProductListItem;
