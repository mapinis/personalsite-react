import React from "react";
import { ListGroup, ListGroupItem, ListGroupItemHeading } from "reactstrap";
import { browserHistory } from "react-router";
import Img from "react-image";

console.log(browserHistory.getCurrentLocation());

const Navigation = () => (
  <div id="App_Nav">
    {/*<Img alt="mapinis logo" src={require("./logo.png")}/>*/}
    <ListGroup>
      <ListGroupItemHeading id="NavHeading">mapinis</ListGroupItemHeading>
      <ListGroupItem active={browserHistory.getCurrentLocation().pathname == "/"} tag="a" href="/" action>Home</ListGroupItem>
      <ListGroupItem active={browserHistory.getCurrentLocation().pathname == "/about"} tag="a" href="/about" action>About</ListGroupItem>
      <ListGroupItem active={browserHistory.getCurrentLocation().pathname == "/programming"} tag="a" href="/programming" action>Programming</ListGroupItem>
      <ListGroupItem active={browserHistory.getCurrentLocation().pathname == "/photography"} tag="a" href="/photography" action>Photography</ListGroupItem>
    </ListGroup>
  </div>
);

export default Navigation;