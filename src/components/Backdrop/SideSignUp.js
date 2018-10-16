import React from 'react';

import {
  Nav,
  InputGroup,
  InputGroupAddon,
  Input,
  Badge
} from 'reactstrap';

import './SideSignUp.css';

class SideSignUp extends React.Component {
  render () {
    return (
      <div className="SideSignUp">
        <Nav vertical>
          <Badge color="primary">Register</Badge>
          <InputGroup className="flex">
            <InputGroupAddon addonType="prepend">name</InputGroupAddon>
            <Input placeholder="name" />
          </InputGroup>
          <InputGroup className="flex">
            <InputGroupAddon addonType="prepend">last name</InputGroupAddon>
            <Input placeholder="last name" />
          </InputGroup>

          <InputGroup className="flex">
            <InputGroupAddon addonType="prepend">user</InputGroupAddon>
            <Input placeholder="username" />
          </InputGroup>

          <InputGroup className="flex">
            <InputGroupAddon addonType="prepend">@</InputGroupAddon>
            <Input placeholder="email" />
          </InputGroup>

          <InputGroup className="flex">
            <InputGroupAddon addonType="prepend">password</InputGroupAddon>
            <Input type="password" placeholder="password" />
          </InputGroup>
        </Nav>
      </div>
    );
  }
}

export default SideSignUp;
