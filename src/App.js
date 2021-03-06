import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Menu from './components/Menu'
import Focus from './components/Focus'
import AllNews from './components/AllNews'
import Links from './components/Links'
import Footer from './components/Footer'
import axios from 'axios'
import './resources/styles/style.css'

const App = () => {

  const [news, setNews] = useState([])

  useEffect(() => {
      axios.get('http://192.168.2.227:3001/data')
           .then(response => setNews(news.concat(response.data)))
  }, [])

  /*  za povezivanje sa serverom
  const testObject = {
      title: "sisice",
      summary: "Lazovic sisca",
      content: "Sone sisica"
  }
  useEffect(() => {
      axios.get('http://192.168.2.205:8080/api/content/articles')
           .then(response => console.log(response.data))

      axios.post('http://192.168.2.205:8080/api/content/articles', testObject)
           .then(response => console.log(response))
  }, []) */

  return (
    <div className="main-div">
      <Header />
      <Menu fluid />
      <Focus news={news} />
      <div className="contents">
          
          {/* <br></br> */}
          
          <AllNews news={news} />
          <br></br>
          <Links images={news} />
          <br></br>
          
      </div>
      <Footer fluid />
    </div>
  );
}

export default App;
