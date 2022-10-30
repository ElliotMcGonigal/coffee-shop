import React from 'react';
import CoffeeDetail from "./CoffeeDetail";
import CoffeeList from "./CoffeeList";
import NewCoffee from "./NewCoffeeForm";
import UpdateCoffee from "./UpdateCoffee";
import coffeesack1 from "./../img/coffee-sack.jpg";
import coffeesack2 from "./../img/coffee-sack.jpg";
import coffeesack3 from "./../img/coffee-sack.jpg";
import coffeesack4 from "./../img/coffee-sack.jpg";
import coffeesack5 from "./../img/coffee-sack.jpg";

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
        picture: coffeesack1,
        quantity: 130,
        id: "1"
      },
      {
        name: "Fireside",
        origin: "Oregon",
        price: 5,
        roast: "dark",
        picture: coffeesack2,
        quantity: 130,
        id: "2"
      },
      {
        name: "Caribou",
        origin: "New York",
        price: 5,
        roast: "medium",
        picture: coffeesack3,
        quantity: 130,
        id: "3"
      },
      {
        name: "Daybreak",
        origin: "Washington",
        price: 5,
        roast: "light",
        picture: coffeesack4,
        quantity: 130,
        id: "4"
      },
      {
        name: "Caribou decaf",
        origin: "Idaho",
        price: 5,
        roast: "decaf",
        picture: coffeesack5,
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

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      formVisibleOnPage: false
    });
  }

  handleEditClick = () => {
    this.setState({
      editing: true
    });
  }
}

export default CoffeeControl;