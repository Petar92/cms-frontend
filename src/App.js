import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Menu from './components/Menu'
import Image from './components/Image'
import Focus from './components/Focus'
import AllNews from './components/AllNews'
import Links from './components/Links'
import Footer from './components/Footer'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import './resources/styles/style.css'
import newsService from './services/newsService'

const App = () => {

  const [news, setNews] = useState([])

  useEffect(() => {
      axios.get('http://localhost:3001/data')
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
      <Container className="container">
          
          <br></br>
          <Focus news={news} />
          <AllNews news={news} />
          <br></br>
          <Links images={news} />
          <br></br>
          <Footer fluid />
      </Container>
    </div>
  );
}

export default App;
