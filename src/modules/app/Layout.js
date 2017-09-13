import React from 'react';
import { BackTop } from 'antd';
import { Menu } from '../../components';

const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      <div className='content'>
        {children}
      </div>
      <BackTop style={{ right: 50 }} />
    </div>
  )
}

export default Layout