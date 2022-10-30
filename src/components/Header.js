import React from "react";
import coffeeline from "./../img/coffeeline";

function Header(){
  return (
    <React.Fragment>
      <h1>Generic Coffee Shop Mark 2</h1>
      <img src={coffeeline} alt="Coffee Beans" />
    </React.Fragment>
  );
}

export default Header;