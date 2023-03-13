import React, { useContext } from 'react';
import logo from '../../images/logo.svg';
import './nav.scss';
import { ThemeContext } from "../theme/theme";
import sun from '../../images/light.svg';
import moon from '../../images/dark.svg';

const Nav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="navigation">
      <div className='logo'>
        <a className="link" href='/'>
          <img src={logo} alt="logo"/>
        </a>
      </div>
      <div className='toggle'> 
        <button onClick={() => toggleTheme()} className={theme === 'dark-theme' ? 'toggle__btn toggle__btn--active' : 'toggle__btn'}>
          <img src={sun} alt="Light-theme" className="toggle__btn--icon"/>
          <img src={moon} alt="Dark-theme" className="toggle__btn--icon"/>
        </button>
      </div>
    </div>
   
  )

}; 

export default Nav;
  

