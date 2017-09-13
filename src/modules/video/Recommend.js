import React from 'react';
import { Link } from 'react-router-dom';

function countFormat(count) {
  return count >= 10000 ? `${(count / 10000).toFixed(1)}万` : count;
}

const RecommendItem = ({ aid, pic, title, view, danmaku }) => {
  return (
    <li className='content-item'>
      <Link to={`/video/${aid}`}>
        <div className='video-cover' data-img={pic}></div>
        <p className='video-name'>{title}</p>
        <div className='video-info'>
          <div className='play-num'>
            <span className='index-sprite index-sprite-play'></span>
            <p>{countFormat(view)}</p>
          </div>
          <div className='barrage-num'>
            <span className='index-sprite index-sprite-barrage'></span>
            <p>{countFormat(danmaku)}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

const RecommendList = ({ dataList }) => {
  return (
    <ul className='content-list'>
      {
        dataList.map((recommend) => {
          let { aid, pic, title, stat: { view, danmaku } } = recommend;
          return (
            <RecommendItem 
              key={aid}
              { ...{ aid, pic, title, view, danmaku } }
            />
          );
        })
      }
    </ul>
  );
}

const Recommend = ({ recommendVisibleList, length, onShowMore }) => {
  return (
    <div className='recommend main-container'>
      <h2 className='section-title'>相关推荐</h2>
      <RecommendList dataList={recommendVisibleList} />
      {
        recommendVisibleList.length === length
        ? <div className='load-more load-disabled'>没有更多信息了</div>
        : <div className='load-more' onClick={onShowMore}>加载更多</div>
      }
    </div>
  );
}

export default Recommend;
