import React from 'react';
import { Link } from 'react-router-dom';
import { addLoading } from '../../../components';
import countFormat from '../../../plugs/countFormat';

function ResultItem({ aid, pic, duration, title, author, play, barrage }) {
  return (
    <li>
      <Link to={`/video/${aid}`} className='list-box'>
        <div className='video-cover'>
          <div className='cover-box' data-img={pic}></div>
          <span className='video-duration'>{duration}</span>
        </div>
        <div className='video-info'>
          <div className='video-title'>{title}</div>
          <div className='video-detaied'>
            <i className='icon-detaied icon-up'></i>
            <span>{author}</span>
          </div>
          <div className='video-detaied'>
            <div className='play-danmu'>
              <i className='icon-detaied icon-play'></i>
              <span>{play}</span>
            </div>
            <div className='play-danmu'>
              <i className='icon-detaied icon-danmu'></i>
              <span>{barrage}</span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

function ResultList({ dataList = [] }) {
  return (
    <ul className='search-result rank-list'>
      {
        dataList.map((result) => {
          let { aid, pic, duration, title, author, play, video_review } = result;
          return (
            <ResultItem
              key={aid}
              aid={aid}
              pic={pic}
              duration={duration}
              title={title}
              author={author}
              play={countFormat(play)}
              barrage={countFormat(video_review)}
            />
          )
        })
      }
    </ul>
  );
}

export default addLoading(ResultList);
