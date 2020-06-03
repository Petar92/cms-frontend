import React from 'react'
import News from './News'
import placeholder_news from '../resources/dummy_data/placeholder_news'

const AllNews = () => {
    
    return(
        <div className="allNewsStyle">
            {placeholder_news.map(news => 
                <News key={news.id} data={news}/>
            )}
        </div>
    )
}

export default AllNews