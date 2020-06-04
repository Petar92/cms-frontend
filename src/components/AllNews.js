import React from 'react'
import News from './News'
import '../resources/styles/style.css'

const AllNews = (props) => {
    
    return(
        <div className="allNews">
            {props.news.map(news => 
                <News key={news.id} data={news}/>
            )}
        </div>
    )
}

export default AllNews