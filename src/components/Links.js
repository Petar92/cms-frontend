import React from 'react'
import { Router, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Links = (props) => {
    const image = props.images.map((fileName) => {
        return <Col xs={3} md={2}>
                    <a href="http://hotelbreza.mod.gov.rs/">
                      <Image src={require(`/home/repic/cms-frontend/src/resources/images/${fileName.img}`)} 
                      alt="obavestenje" rounded />
                    </a>
                </Col>
    })
    return(
        <div className="links">
            <Container>
              <Row>
                {image}
              </Row>
            </Container>
        </div>
    )
}

export default Links