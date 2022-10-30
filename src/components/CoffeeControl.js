import React from 'react';
import CoffeeDetail from "./CoffeeDetail";
import CoffeeList from "./CoffeeList";
import NewCoffee from "./NewCoffeeForm";
import EditCoffeeForm from "./EditCoffeeForm";
import coffeesack1 from "./../img/coffee-sack.jpg";
import coffeesack2 from "./../img/coffee-sack.jpg";
import coffeesack3 from "./../img/coffee-sack.jpg";
import coffeesack4 from "./../img/coffee-sack.jpg";
import coffeesack5 from "./../img/coffee-sack.jpg";
import { render } from '@testing-library/react';
import NewCoffeeForm from './NewCoffeeForm';

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

  handleChangingSelectedCoffee=(id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({selectedCoffee: selectedCoffee});
  }

  handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== this.state.selectedCoffee.id).concat(coffeeToEdit);
    this.setState({
      mainCoffeeList: editedMainCoffeeList,
      editing: false,
      selectedCoffee: null
    });
  }

  handleSellingCoffee = (id) => {
    const coffeeToSell = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    if (coffeeToSell.quantity > 0) {
      const newQuantity = coffeeToSell.quantity - 1;
      const coffeeSale = {...coffeeToSell, quantity:newQuantity};
      const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id).concat(coffeeSale);
      this.setState({
        mainCoffeeList: newMainCoffeeList,
        selectedCoffee: null
      });
    }
  }

  handleBuyingNewCoffee = (id) => {
    const coffeeRefill = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    const refilledCoffee = {...coffeeRefill, quantity:130};
    const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id).concat(refilledCoffee);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: null
    });
  }

  
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditCoffeeForm
      coffee={this.state.selectedCoffee}
      onEditCoffee={this.handleEditingCoffeeInList} />
      buttonText = "Return to Coffee List"
    } else if (this.state.selectedCoffee) {
      currentlyVisibleState = <CoffeeDetail 
      coffee={this.state.selectedCoffee}
      onClickingEdit={this.handleEditClick}
      onClickingOrder={this.handleBuyingNewCoffee}
      onClickingSell={this.handleSellingCoffee} />
      buttonText = "Return to Coffee List"
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm
      onNewCoffeeCreation={this.handleAddingNewCoffeeToList} />
      buttonText = "Return to Coffee List"
    } else {
      currentlyVisibleState = <CoffeeList 
      coffeeList={this.state.mainCoffeeList}
      onCoffeeSelection={this.handleChangingSelectedCoffee} />
      buttonText = "Add a new Coffee"
    } return (
      <React.Fragment>
        {currentlyVisibleState}
        <hr />
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}



export default CoffeeControl;