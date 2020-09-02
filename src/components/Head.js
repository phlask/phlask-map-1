import React, { Component } from "react";
import "./Head.css";
import logo from "./images/phlask-logo/phlask-logo.png";
import logo2x from "./images/phlask-logo/phlask-logo@2x.png";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Head extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayFilter: false
    };
  }

  render() {
    return (
      <div className="menu">
        <header>
          <Navbar bg="light" expand="lg" className="headColumns">
            <Navbar.Brand href="https://phlask.me/">
              <img
                src={logo}
                alt="Phlask"
                className="logoImage"
                srcSet={logo + ", " + logo2x + " 2x"}
              />
            </Navbar.Brand>
            {/* <img src={icon} alt="filterImg" onClick={this.display} /> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="menu">
              <Nav className="mr-auto">
                <Nav.Link href="mission">Mission</Nav.Link>
                <Nav.Link href="project">Project</Nav.Link>
                <Nav.Link href="share">Share Water & Food</Nav.Link>
                <Nav.Link href="contribute">Contribute</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
      </div>
    );
  }
}

export default Head;
