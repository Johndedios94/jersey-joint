import React from 'react';

function ProductListItem(props) {
  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
      <div onClick={() => props.setView('details', { id: props.id })} className="card card-style borderItem my-2" >
        <img className="card-img-top" src={props.image} alt="..." />
        <div className="card-body carditem">
          <h5 className="name">{props.name}</h5>
          <p className="price">${(props.price / 100).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
