import React from 'react';
import './footer.scss';
import telegram from '../../images/telegram.svg';
import gitHub from '../../images/github.svg';
import linkedIn from '../../images/linkedin.svg';

const Footer = () => {
  return ( 
      <footer className="footer">
          <div className="content">
              <div className="footer__wrapper">
                  <ul className="social">
                      <li className="social__item">
                          <a className="telegram-icon" href="https://web.telegram.org/k/#@ruda_bestiika" 
                              target="_blank" rel="noreferrer">
                              <img src={telegram} alt="Link"/>
                          </a>
                      </li>
                      <li className="social__item">
                          <a className="gitHub-icon" href="https://github.com/SvitlanaFediai" 
                              target="_blank" rel="noreferrer">
                              <img src={gitHub} alt="Link"/>
                          </a>
                      </li>
                      <li className="social__item">
                          <a className="linkedIn-icon" href="https://www.linkedin.com/in/svitlana-fediai-a95061210" 
                              target="_blank" rel="noreferrer">
                              <img src={linkedIn} alt="Link"/>
                          </a>
                      </li>
                  </ul>
                  <div className="copyright">
                      <p>©copyright 2023</p>
                  </div>
              </div>
          </div>
    </footer>
  );
}

export default Footer;