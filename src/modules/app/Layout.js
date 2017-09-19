import React from 'react';
import { Menu } from '../../components';

const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      <div className='content'>
        {children}
      </div>
    </div>
  )
}

export default Layout
