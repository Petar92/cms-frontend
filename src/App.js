import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Menu from './components/Menu'
import Image from './components/Image'
import Focus from './components/Focus'
import AllNews from './components/AllNews'
import Links from './components/Links'
import Footer from './components/Footer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import axios from 'axios'
import './resources/styles/style.css'

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
    <div>
      <Container>
        <Row>
          <Header fluid />
        </Row>
        <Row>
          <Menu fluid />
        </Row>
        <Row>
          <Image fluid />
        </Row>
        <Row>
          <Focus news={news} />
        </Row>
        <Row>
          <AllNews news={news} />
        </Row>
        <Row>
          <Links />
        </Row>
        <Row>
          <Footer fluid />
        </Row>
      </Container>
    </div>
  );
}

export default App;
