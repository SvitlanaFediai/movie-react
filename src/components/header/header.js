import React from 'react';
import './header.scss';
import Container from '../container/container';
import Nav from '../nav/nav';


function Header() {
  
  return (
    <header className="header">
      <Container>
        <div className="header__content">
          <Nav/>
          <div className="header__info"> 
            <h1 className="header__title">Unlimited movies, shows and more</h1>
            <h2 className="header__subtitle">Watch anywhere</h2>
            <h3 className="header__text">Ready to watch?</h3>
          </div>
          <button className='btn btn__scroll' onClick={() => window.scrollBy({top: window.innerHeight, left: 0, behavior: "smooth"})}>
          <svg className='header__icon' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M9 11L11.6002 13.6002V13.6002C11.821 13.821 12.179 13.821 12.3998 13.6002V13.6002L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          </button>
        </div>
      </Container>
    </header>
  );
}

export default Header;

