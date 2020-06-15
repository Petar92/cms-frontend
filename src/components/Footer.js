import React from 'react'
import Nav from 'react-bootstrap/Nav'

const Footer = () => {
    
    return(
        <div className="footer">
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                  <Nav.Link href="/home">Zvanicni sajt</Nav.Link>
                </Nav.Item>
            </Nav>
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                  <Nav.Link href="/home">O nama</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Mapa sajta</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Uslovi koriscenja</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-3">Kontakt</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Footer