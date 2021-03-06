import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../resources/styles/style.css'

const Focus = (props) => {

    const currentDate = () => {
        let d = new Date().toISOString();
        const datum = new Date(d)
        const day = datum.getDate()
        const month = datum.getMonth() + 1
        const year = datum.getFullYear()
        return day + "." + month + "." + year
        
    }

    const display = props.news.filter(news => news.focus === true)
    
    return(
        <Carousel pause='hover' interval='2500' >
            {display.map(news => 
                <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require(`/home/repic/cms-frontend/src/resources/images/${news.img}`)}
                      alt={news.text}
                    />
                    <Carousel.Caption>
                      <h3>{currentDate() /* ovo izmeniti kada se poveze sa serverom da vuce datum sa servera */}</h3>
                      <p>{news.text}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )}
            
        </Carousel>
    )
}

export default Focus