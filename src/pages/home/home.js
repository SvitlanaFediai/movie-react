import React from 'react';
import Container from '../../components/container/container';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Wrapper from '../../components/wrapper/wrapper';
import Movies from "../../components/movies/movies";
import MovieSlider from "../../components/slider/slider";


const Home = () => {
  return (
    <>
      <Wrapper>
        <Header/>
      </Wrapper>
      <Container>
        <Movies/>
        <MovieSlider />
      </Container>
      <Footer/>
    </>
  )
  
};

export default Home;