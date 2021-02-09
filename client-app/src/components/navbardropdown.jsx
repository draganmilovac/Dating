import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
const NavBarDropdown = (props) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {props.username}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {" "}
        <Dropdown.Item as={Link} to="/members/edit">
          Edit
        </Dropdown.Item>{" "}
        <Dropdown.Item onClick={props.onLogout}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NavBarDropdown;
