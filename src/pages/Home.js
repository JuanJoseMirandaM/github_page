import React from 'react'
import { Container, Jumbotron } from 'reactstrap'

const Home = () => {
  return (
    <div>
      <Jumbotron>
        <Container fluid>
          <h1 className="display-3">API de Github</h1>
          <p className="lead">Aplicación que utiliza la API de Github para buscar usuarios y repositorios.</p>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Home
