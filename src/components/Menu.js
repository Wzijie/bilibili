import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/Menu.less';

function Menu() {
  return (
    <nav className='menu'>
      <ul className='menu-list'>
        <li><NavLink exact to='/' activeClassName='menu-active'>首页</NavLink></li>
        <li><NavLink to='/channel' activeClassName='menu-active'>频道</NavLink></li>
        <li><NavLink to='/live' activeClassName='menu-active'>直播</NavLink></li>
        <li><NavLink to='/ranking' activeClassName='menu-active'>排行</NavLink></li>
        <li><NavLink to='/user' activeClassName='menu-active'>我的</NavLink></li>
      </ul>
    </nav>
  )
}

export default Menu;