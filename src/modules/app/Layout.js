import React from 'react';
import Header from './Header';
import Menu from './Menu';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Menu />
      <div className='content'>
        {children}
      </div>
    </div>
  )
}

export default Layout
