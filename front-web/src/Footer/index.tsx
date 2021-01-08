import React from 'react';

import './styles.css'
import {ReactComponent as Instagram  } from './instagram.svg';
import {ReactComponent as Linkedin  } from './linkedin.svg';
import {ReactComponent as Youtube  } from './youtube.svg';

function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
        <a href="https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g" target="_blank" >
          <Youtube />
        </a>
        <a href="https://www.linkedin.com/school/devsuperior" target="_blank" >
          <Linkedin />
        </a>
        <a href="https://www.instagram.com/devsuperior.ig" target="_blank" >
          <Instagram />
        </a>
        
        
        
        
      </div>
    </footer>
  );
}

export default Footer;