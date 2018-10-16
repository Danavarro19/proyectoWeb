import React from 'react';
import './SiteNavbar.css';
import { Nav, NavItem, NavLink} from 'reactstrap';

class SiteNavbar extends React.Component {

  render() {
    return (
      <header className="flex header">
        <div className="logo-section flex">
          <div className="logo">
            <i className="fab fa-connectdevelop"></i>
          </div>
          <div className="social-title">
            <h1 className="social">social network</h1>
          </div>
        </div>
        <Nav className="navBar flex" >
          <NavItem>
          <NavLink href="#">Sign in</NavLink>
          </NavItem>
          <NavItem>
          <NavLink href="#">Contact</NavLink>
          </NavItem>
          <NavItem>
          <NavLink href="#">About us</NavLink>
          </NavItem>
        </Nav>
      </header>
    );
  }

}

export default SiteNavbar
