import React, {useEffect, useState} from "react"
import "./detail.scss"
import SimilarMovie from "../similarMovie/similar"
import Container from "../container/container"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useParams } from "react-router-dom"

const MovieDetail = () => {
  const [currentMovieDetail, setMovieDetail] = useState([]);
  const { id } = useParams()
  

  useEffect(() => {
    getData(id)
    window.scrollTo(0,0)
  }, [id])

  const getData = (id) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ef2f8bcbdd33a5b5f53e7b67be6833d4&language=en-US`)
    .then(res => res.json())
    .then(data => setMovieDetail(data))
  }

  return (
    <>
      <section className="movie">
        <div className="movie__intro">
          <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
        </div>
        <Container>
          <div className="movie__detail">
            <div className="movie__detailLeft">
              <div className="movie__poster-box">
                <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
              </div>
              <div className="movie__cghcg"></div>
            </div>
            <div className="movie__detailRight">
              <div className="movie__detailRightTop">
                <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                <div className="movie__info">
                  <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                  <div className="movie__rating">
                    {currentMovieDetail ? currentMovieDetail.vote_average: ""} <FontAwesomeIcon icon={faStar}/>
                    <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                  </div>  
                  <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                  <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                  <div className="movie__genres">
                    {
                      currentMovieDetail && currentMovieDetail.genres
                      ? 
                      currentMovieDetail.genres.map(genre => (
                        <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                      )) 
                      : 
                      ""
                    }
                  </div>
                </div>
              </div>
              <div className="movie__detailRightBottom">
                <h3 className="movie__text">Overview</h3>
                <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <SimilarMovie/>
    </>
  )

}
          
export default MovieDetail