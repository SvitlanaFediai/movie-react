import React, {useEffect, useState} from "react"
import Cards from "../cards/cards"
import Container from "../container/container";
import Slider from "react-slick";
import "./slider.scss"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className='arrow arrow__next'
      onClick={onClick}>
      <svg className='arrow__icon' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="1" id="_1">
        <path d="M202.1,450a15,15,0,0,1-10.6-25.61L365.79,250.1,191.5,75.81A15,15,0,0,1,212.71,54.6l184.9,184.9a15,15,0,0,1,0,21.21l-184.9,184.9A15,15,0,0,1,202.1,450Z" fill="currentColor"/></g>
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className='arrow arrow__prev'
      onClick={onClick}>
      <svg className='arrow__icon' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="1" id="_1">
        <path d="M353,450a15,15,0,0,1-10.61-4.39L157.5,260.71a15,15,0,0,1,0-21.21L342.39,54.6a15,15,0,1,1,21.22,21.21L189.32,250.1,363.61,424.39A15,15,0,0,1,353,450Z" fill="currentColor"/></g>
      </svg>
    </div>

  );
}

const MovieSlider = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 350,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
    ]
  }

  const URL = "https://api.themoviedb.org/3";
  const KEY = "ef2f8bcbdd33a5b5f53e7b67be6833d4";
  
  const [popularMovies, setPopularMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  

    useEffect(()=>{
        fetch(`${URL}/movie/popular?api_key=${KEY}&language=en-US`)
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))

    },[])
    useEffect(()=>{
      fetch(`${URL}/movie/top_rated?api_key=${KEY}&language=en-US`)
      .then(res => res.json())
      .then(data => setTopMovies(data.results))

    },[])
    useEffect(()=>{
      fetch(`${URL}/movie/upcoming?api_key=${KEY}&language=en-US&page=2`)
      .then(res => res.json())
      .then(data => setUpcomingMovies(data.results))

    },[])

  return (
    <>
      <section>
        <h2 className="movie__title">popular movies</h2>
        <Slider {...settings}>
          
          {
            popularMovies.map((movie, index ) => (
              <Cards movie={movie} key={index} />
            ))
          }
        </Slider>
      </section>

      <section>
        <h2 className="movie__title">Top rated</h2>
        <Slider {...settings}>
          
          {
            topMovies.map((movie, index ) => (
              <Cards movie={movie} key={index} />
            ))
          }
        </Slider>
      </section>

      <section>
        <h2 className="movie__title">upcoming</h2>
        <Slider {...settings}>
          
          {
            upcomingMovies.map((movie, index ) => (
              <Cards movie={movie} key={index} />
            ))
          }
        </Slider>
      </section>
    </>
  );
}

export default MovieSlider