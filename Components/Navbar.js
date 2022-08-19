import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link,
    Outlet,
  } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="info" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home">WhiteSeed</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">

    <ReactBootStrap.Nav className="mr-auto"> 

   
    </ReactBootStrap.Nav>
    
    <ReactBootStrap.Nav>

    <Link to="/features">
    <ReactBootStrap.Nav.Link href="#features">Home</ReactBootStrap.Nav.Link>
    </Link>

    <Link to="/pricing">
    <ReactBootStrap.Nav.Link href="#pricing">About</ReactBootStrap.Nav.Link>
    </Link>

      <ReactBootStrap.NavDropdown title="Features" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>


    <Link to="/deets">
    <ReactBootStrap.Nav.Link href="#deets">Contact</ReactBootStrap.Nav.Link>
    </Link>

    <Link to="/dankmemes">
      <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
        Login
      </ReactBootStrap.Nav.Link>
    </Link>

    </ReactBootStrap.Nav>
    </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
     

        </div>
    )
}

export default NavBar;