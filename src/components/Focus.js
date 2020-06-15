import React, {useState, useEffect} from 'react'
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

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
          setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
        return () => { window.removeEventListener("resize", handleResize) }
      }, [])
    
    const height = (width < 600) ? 270 : 600;

    const display = props.news.filter(news => news.focus === true)
    
    return(
        <Carousel pause='hover' interval='2500' style={{height:`${height}px`}}>
            {display.map(news => 
                <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require(`/home/repic/cms-frontend/src/resources/images/${news.img}`)}
                      alt={news.text}
                      style={{height:`${height}px`}}
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