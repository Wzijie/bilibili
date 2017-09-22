import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className='header'>
    <Link to='/' className='logo'></Link>
    <div className='btn-box'>
      <Link to='/search' className='search-btn' >
        <i className='icon-search'></i>
      </Link>
      <a className='history-btn'>
        <i className='icon-history'></i>
      </a>
    </div>
  </header>
);

export default Header;
