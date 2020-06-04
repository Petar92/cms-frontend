import React from 'react'
import News from './News'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import '../resources/styles/style.css'

const Focus = (props) => {

    

    const display = props.news.filter(news => news.focus)
    
    return(
        <div className="test">
            <Container fluid="md">
                <h2>U fokusu...</h2>
                    {display.map(news => 
                    <Col md={4}>
                        <News key={news.id} data={news} />
                    </Col>
                    )}
            </Container>
        </div>
    )
}

export default Focus