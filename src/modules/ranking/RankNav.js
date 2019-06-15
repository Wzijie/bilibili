import React from 'react';

function createNavConfig(title, rankId) {
  return {
    title,
    rankId
  };
}

const navConfig = [
  createNavConfig('全站', '0'),
  createNavConfig('动画', '1'),
  createNavConfig('番剧', '33'),
  createNavConfig('电影', '23'),
  createNavConfig('音乐', '3'),
  createNavConfig('游戏', '4'),
  createNavConfig('科技', '36'),
];

const RankNav = () => {
  return (
    <nav className='rank-nav'>
      <ul className='roll-list'>
        {
          navConfig.map((navItem) => {
            let { title, rankId } = navItem;
            return (
              <li key={rankId} >
                <a onClick={() => {this.fetchRanking(rankId)}} >{title}</a>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default RankNav;
