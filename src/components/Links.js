import React from 'react'
import Slider from "react-slick"   
import "../resources/styles/_slick.css"
import "../resources/styles/_slickTheme.css" 

const Links = (props) => {

    const settings = {
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4
      }

      const linkContent = props.images.map(link => {
          return <div>
                    <a href="http://hotelbreza.mod.gov.rs/">
                      <img src={require(`/home/repic/cms-frontend/src/resources/images/${link.img}`)} 
                      alt="obavestenje" rounded />
                    </a>
                 </div>
      })

      return (
        <div className='sliderA'>
            <Slider {...settings}>
              {linkContent}
            </Slider>
            
        </div>
      )
}

export default Links