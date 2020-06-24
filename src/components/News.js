import React from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../resources/styles/style.css'

const News = (props) => {
    
    const fileName =  props.data.img

    const currentDate = () => {
        let d = new Date().toISOString();
        const datum = new Date(d)
        const day = datum.getDate()
        const month = datum.getMonth() + 1
        const year = datum.getFullYear()
        return day + "." + month + "." + year
        
    }

    return(
        <Card border="light" bg={"white"}>
            <Card.Img variant="top" src={require(`/home/repic/cms-frontend/src/resources/images/${fileName}`)} alt="obavestenje" />
            <Card.Body>
                <Card.Text>
                    {currentDate() /* ovo izmeniti kada se poveze sa serverom da vuce datum sa servera */}
                </Card.Text>
                <Card.Title>{props.data.text}</Card.Title>
            </Card.Body>
            <hr></hr>
        </Card>
    )
}

export default News