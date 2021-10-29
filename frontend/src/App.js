import './App.css';
import React from "react"
import { Container } from 'react-bootstrap';
import { Router, Route } from "react-router-dom"
import FormData from './components/FormData';




function App() {

  return (
    <>
      <Router>
        <Container>
          <Route exact path="/" component={FormData} />
        </Container>
      </Router>
    </>
  );
}

export default App;
