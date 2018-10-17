import React from 'react';
import './SiteNavbar.css';
import { Nav, NavItem, NavLink} from 'reactstrap';

class SiteNavbar extends React.Component {

  render() {
    return (
      <Nav className="navBar flex fixed-top" >
        <NavItem className="navbar-brand border-bottom-orange">
          <i className="fab fa-connectdevelop logo"></i>
        </NavItem>
        <NavItem className="navbar-text border-bottom-orange">
          <h1 className="social">social network</h1>
        </NavItem>
        <NavItem className="sign-in link">
          <NavLink href="#">Sign in</NavLink>
        </NavItem>
        <NavItem className="link">
          <NavLink href="#">Contact</NavLink>
        </NavItem>
        <NavItem className="link">
          <NavLink href="#">About us</NavLink>
        </NavItem>
      </Nav>
      );
  }

}

export default SiteNavbar
