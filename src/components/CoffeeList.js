import React from 'react';
import PropTypes from 'prop-types';
import Coffee from './Coffee';

function CoffeeList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.coffeeList.map((coffee) => 
        <Coffee
          whenCoffeeClicked={props.onCoffeeSelection}
          name={coffee.name}
          price={parseInt(coffee.price)}
          origin={coffee.origin}
          picture={coffee.picture}
          roast={coffee.roast}
          quantity={parseInt(coffee.quantity)}
          id={coffee.id}
          key={coffee.id}/>
      )}
    </React.Fragment>
  );
}

CoffeeList.proptypes = {
  onCoffeeSelection: PropTypes.func,
  coffeeList: PropTypes.array
};

export default CoffeeList;