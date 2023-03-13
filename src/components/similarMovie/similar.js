import React, {useEffect, useState} from "react"
import "./similar.scss"
import Cards from "../cards/cards"
import Container from "../container/container"
import { useParams, NavLink } from "react-router-dom"

const SimilarMovie = () => {

  const [similarMovie, setSimilarMovie] = useState([]);
  const { id } = useParams()

  useEffect(() => {
    getData()
    window.scrollTo(0,0)
  }, [])

  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=ef2f8bcbdd33a5b5f53e7b67be6833d4&language=en-US`)
    .then(res => res.json())
    .then(data => setSimilarMovie(data.results))
  }
    


  return (
    <Container>
      <section className='similar__movie'>
          {similarMovie.length > 0 ?
            <>
              <h2 className='movie__title similar__title'>recommendations</h2>
              <div className='similar__list'>
                {
                similarMovie.map((movie, index) => (
                  <Cards movie={movie} key={index} />
                  ))
                }
              </div>
            </>
            :
            <h2 className='similar__title similar__title--center'>
              No recommendations found for this movie .
            </h2>
          }
          <button className="message-box__wrap" type="button">
            <NavLink to="/" className="message-box__link" >Back</NavLink>
          </button>
      </section>
    </Container>
  )

}
          
export default SimilarMovie