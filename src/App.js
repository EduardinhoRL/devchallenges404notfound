import React from 'react';  
import Header from './components/Header'
import Error404 from './components/Error404'
import Footer from './components/Footer'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 100px 1fr 60px;
  padding: 0 20px;

@media only screen and (max-width: 950px) {
  grid-template-rows: 60px 1fr 80px;
}

`

function App() {
  return (
    <>
      <Container>
        <Header />
        <Error404 />
        <Footer />
      </Container>
      
    </>
  );
}

export default App;
