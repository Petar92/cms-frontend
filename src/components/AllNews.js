import React from 'react'
import News from './News'
import CardColumns from 'react-bootstrap/CardColumns'
import '../resources/styles/style.css'

const AllNews = (props) => {
    
    return(
        <CardColumns>
            {props.news.map(news => 
                <News key={news.id} data={news}/>
            )}
        </CardColumns>
    )
}

export default AllNews