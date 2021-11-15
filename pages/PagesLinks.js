import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './PagesLinks.css';

class PagesLinks extends React.Component {

  render() {

    return (
      <div>
        <nav className="pageContainer">
          <span>__weather__</span>
          <NavLink to="/defaultCity" exact className="PageLink" activeClassName="ActivePageLink" >Главная</NavLink>
         
          <NavLink to="/search/Minsk" className="PageLink" activeClassName="ActivePageLink">Поиск</NavLink>
        </nav>
      </div>
    );

  }

}

export default PagesLinks;
