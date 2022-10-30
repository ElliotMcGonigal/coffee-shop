import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props) {
  const { coffee } = props;

  return (
    <React.Fragment>
      <h2>Details of {coffee.name}</h2>
      <p>Roast: {coffee.roast}</p>
      <p>Cost: ${coffee.price}</p>
      <p>Scoops left in bag: {coffee.quantity}</p>
      <button className="btw btn-primary" onClick={() => props.onClickingSell(coffee.id)}>Sell a scoop of coffee</button>
      <button className="btn btn-primary" onClick={props.onClickingEdit}>Edit Coffee</button>
      <button className="btn btn-primary" onClick={() => props.onClickingOrder(coffee.id)}>Order a new bag</button>
    </React.Fragment>
  ) 
}


CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingOrder: PropTypes.func,
  onClickingSell: PropTypes.func
}

export default CoffeeDetail;