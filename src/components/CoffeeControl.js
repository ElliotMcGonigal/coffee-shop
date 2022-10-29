import React from 'react';
import CoffeeDetail from "./CoffeeDetail";
import CoffeeList from "./CoffeeList";
import NewCoffee from "./NewCoffee";
import UpdateCoffee from "./UpdateCoffee";

class CoffeeControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [{
        name: "Vanilla Hazelnut",
        origin: "California",
        price: 5,
        roast: "medium",
        quantity: 130,
        id: "1"
      },
      {
        name: "Fireside",
        origin: "Oregon",
        price: 5,
        roast: "dark",
        quantity: 130,
        id: "2"
      },
      {
        name: "Caribou",
        origin: "New York",
        price: 5,
        roast: "medium",
        quantity: 130,
        id: "3"
      },
      {
        name: "Daybreak",
        origin: "Washington",
        price: 5,
        roast: "light",
        quantity: 130,
        id: "4"
      },
      {
        name: "Caribou decaf",
        origin: "Idaho",
        price: 5,
        roast: "decaf",
        quantity: 130,
        id: "5"
      }],
      selectedCoffee: null,
      editing: false
    }
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null, 
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  
}

export default CoffeeControl;