import React from 'react'
import '../resources/styles/style.css'

const News = (props) => {
    
    const fileName =  props.data.img

    const currentDate = () => {
        let d = new Date().toISOString();
        const datum = new Date(d)
        const day = datum.getDate()
        const month = datum.getMonth() + 1
        const year = datum.getFullYear()
        console.log(d)
        return day + "." + month + "." + year
        
    }

    return(
        <div className="news">
            <img src={require(`/home/repic/cms-frontend/src/resources/images/${fileName}`)} alt="obavestenje" />
            <h2>{currentDate() /* ovo izmeniti kada se poveze sa serverom da vuce datum sa servera */}</h2>
            <p>{props.data.text}</p>
        </div>
    )
}

export default News