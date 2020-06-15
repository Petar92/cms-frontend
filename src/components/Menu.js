import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Menu = () => {
    
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Navbar.Brand href="#home">Pocetna strana</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#features">Neki link</Nav.Link>
                    <Nav.Link href="#pricing">Neki link</Nav.Link>
                    <NavDropdown title="Padajuci meni" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Neka stavka</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Neka stavka</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Neka stavka</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Izdvojeni link</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Nav>
                    <Nav.Link href="#deets">Neki link</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Neki link
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Menu
