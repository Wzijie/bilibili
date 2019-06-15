import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImg } from '../../../components';

const SectionItem = ({ aid, pic, title, playCount, barrageCount }) => {
  return (
    <li className='content-item'>
      <Link to={`/video/${aid}`}>
        <div className='video-cover'>
          <LazyLoadImg url={pic} />
        </div>
        <p className='video-name'>{title}</p>
        <div className='video-info'>
          <div className='play-num'>
            <span className='index-sprite index-sprite-play'></span>
            <p>{playCount}</p>
          </div>
          <div className='barrage-num'>
            <span className='index-sprite index-sprite-barrage'></span>
            <p>{barrageCount}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default SectionItem;
