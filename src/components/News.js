import React from 'react'
import '../resources/styles/style.css'

const News = (props) => {
    
    const fileName =  props.data.img
    const url = props.data.img
    console.log(url)

    return(
        <div className="newsClass">
            
            <img src={require(`/home/petar/cms-frontend/src/resources/images/${fileName}`)} alt="obavestenje" />
            <h2>{props.data.date}</h2>
            <p>{props.data.text}</p>
        </div>
    )
}

export default News