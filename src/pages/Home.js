import React from 'react'
import { Col, Container, Jumbotron, Row } from 'reactstrap'
import logo from '../images/github-logo.svg';

const Home = () => {
  return (
    <div>
      <Jumbotron>
        <Container fluid>
          <Row>
            <Col xs="12" md="6">
              <h1 className="display-3">API de Github</h1>
              <p className="lead">Aplicación que utiliza la API de Github para buscar usuarios y repositorios.</p>
            </Col>
            <Col xs="12" md="6">
              <img src={logo} class="img-fluid" alt="logo-github"></img>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      
    </div>
  )
}

export default Home
