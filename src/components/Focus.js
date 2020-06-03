import React from 'react'
import News from './News'
import placeholder_news from '../resources/dummy_data/placeholder_news'
import '../resources/styles/style.css'

const Focus = () => {

    

    const display = placeholder_news.filter(news => news.focus)
    console.log(display)

    return(
        <div className="focus">
            U fokusu...
            {display.map(news => 
                <News key={news.id} data={news}/>)}
        </div>
    )
}

export default Focus