import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import get from "lodash/get";

import { useStore } from "../hooks/index";
import { AUTH_LOGOUT } from "../reducers/actions";

const Navi = props => {
  const [{ auth }, dispatch] = useStore();
  const [name, setName] = useState("");
  useEffect(() => {
    const name = get(auth, "user.name", "n/a");
    setName(name);
  });
  const handleLogout = async e => {
    e.preventDefault();
    console.log("logged out");
    dispatch({ type: AUTH_LOGOUT });
    props.history.push("/");
  };
  return (
    <div id="navbar">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <Link to="/">ControlFreak</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">Home</Link>
            <Link to="/settings">Overview</Link>
          </Nav>
          <Dropdown id="dropdown-basic" alignRight>
            <Dropdown.Toggle>
              <Navbar.Text>Signed in as: {name}</Navbar.Text>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => props.history.push("/settings")}>
                Settings
              </Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default withRouter(Navi);
