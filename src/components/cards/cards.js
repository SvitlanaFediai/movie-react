import React, {useEffect, useState} from 'react'
import MyLoader from "../skeleton/skeleton"
import './cards.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Cards = ({movie}) => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 700);
  }, [])

  return <>
  {
    isLoading

    ?

    <div className="cards">
        <MyLoader/>
    </div>

    :

    <Link to={`/detail/${movie.id}`} onClick={() => window.scrollTo(0, 0)}> 
      <div className="cards">
        <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path:""}`} />
        <div className="cards__overlay">
          <div className="cards__title">{movie ? movie.original_title : "" }</div>
            <div className="cards__info">
              <p className="cards__runtime">{movie ? movie.release_date: ""}</p>
              <div>
                <span className="cards__rating">{ movie ? movie.vote_average : "" } <FontAwesomeIcon icon={faStar}/></span>
              </div>
            </div>
          </div>
      </div>
    </Link>
  }
  </>
}

export default Cards