import React from "react";
import PropTypes from "prop-types";

const coffeeStyle = {
  width:250,
  height:250
}

function Coffee(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <img src={props.picture} alt="Coffee Bag" style={coffeeStyle} />
        <h3>{props.name}</h3>
        <p>Roast: {props.roast}</p>
        <p>Origin: {props.origin}</p>
        <p>Cost: ${props.price}</p>
        <p>{props.quantity} scoops remaining</p>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  roast: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  picture: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;