import { Button, Nav, Navbar, Form, NavDropdown, FormControl } from 'react-bootstrap'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './navBar.css'
import { AiFillBell, AiOutlineBell } from "react-icons/ai";
import { useState } from 'react';

function NavigationBar() {
  const [notes,setNotes] = useState(0)
  const navDropdownTitleFill = (<span><AiFillBell /></span>);
  const navDropdownTitleEmpty = (<span><AiOutlineBell /></span>);
  
  const checkNotes = () => {
    if (notes == 0) {
      return navDropdownTitleEmpty
    } else {
      return navDropdownTitleFill
    }
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Discord Bot Tools</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Form inline>
            <NavDropdown title={checkNotes()} id="basic-nav-dropdown">
              {/*Load Notifications...*/}
            </NavDropdown>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavigationBar