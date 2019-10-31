import React from 'react';

function ProductListItem(props) {
  // console.log('list item props are ', props);
  // console.log('image is ', props.key);
  // console.log(' id is ', props.id);
  return (
    <div className="col-sm-col-lg-3">
      <div onClick={() => props.setView('details', { id: props.id })} className="card card-style borderItem my-2" >
        <img className="card-img-top" src={props.image} alt="..." />
        <div className="card-body carditem">
          <h5 className="name">{props.name}</h5>
          <p className="price">${(props.price / 100).toFixed(2)}</p>
          {/* <p className="card-text">{props.shortDescription}</p> */}
          {/* <p className="card-text">{props.longDescription}</p> */}
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
