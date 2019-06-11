import React from 'react';
import { LazyLoadImg } from '../../components';
import countFormat from '../../plugs/countFormat';

const Description = ({ aid, title, username, face, intro, playCount, barrageCount, favorite, createTime, breadcrumb }) => {
  return (
    <div className='video-intro'>
      <div className='up-info'>
        <div className='up-face'>
          <LazyLoadImg url={face} />
        </div>
        <div className='up-name'>
          <a>UP主：{username}</a>
          <a>围观UP主的全部投稿啊</a>
        </div>
        <a className='up-follow'>关注</a>
      </div>
      <div className='title-desc'>
        <h1 className='video-title'>{title}</h1>
        <div className='video-desc'>
          <p>{intro}</p>
        </div>
      </div>
      <div className='nav-info'>
        {
          breadcrumb.map((breadcurmbItem, index) => {
            return <a key={index}>{breadcurmbItem}<span> &gt; </span></a>;
          })
        }
        <span>av{aid}</span>
      </div>
      <ul className='detaied-info'>
        <li>播放：{countFormat(playCount)}</li>
        <li>弹幕：{countFormat(barrageCount)}</li>
        <li>收藏：{countFormat(favorite)}</li>
        <li>时间：{new Date(createTime).toLocaleDateString()}</li>
      </ul>
      <div className='more-info-toggle'>
        <i className='icon icon-arrow-down'></i>
      </div>
    </div>
  );
}

export default Description;
