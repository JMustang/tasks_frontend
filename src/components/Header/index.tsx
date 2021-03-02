import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="/">React - Tasks</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Item as={Link} className="nav-link" to="/" >Inicio</Nav.Item>
      <Nav.Item as={Link} className="nav-link" to="/tasks">Tarefas</Nav.Item>
     
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
    )
}
