import React from 'react'

const News = () => {
    
    const getDate = () => {
        let d = new Date();
        const currentDate = d.getFullYear
        console.log(currentDate)
        return currentDate
    }
    return(
        <article>
            <img src={require('/home/petar/cms-frontend/src/resources/images/obavestenje.png')} />
            <h2>date{() => getDate}</h2>
        </article>
    )
}

export default News