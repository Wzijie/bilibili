import React from 'react';
import { Link } from 'react-router-dom';

const RankList = ({ dataList }) => {
  return (
    <ul className='rank-list'>
      {
        dataList.map((rankingItem, index) => {
          let { aid, pic, title, author, play, video_review } = rankingItem;
          let playCount = play >= 10000 ? `${(play / 10000).toFixed(1)}万` : play;
          let barrageCount = video_review >= 10000 ? `${(video_review / 10000).toFixed(1)}万` : video_review;
          return (
            <li key={aid}>
              <Link to={`video/${aid}`} className='list-box'>
                <div className='video-cover'>
                  <div className={`rank-num ${index < 3 && 'rank-top3'}`}>{index+1}</div>
                  <div className='cover-box' data-img={pic}></div>
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
                      <span>{playCount}</span>
                    </div>
                    <div className='play-danmu'>
                      <i className='icon-detaied icon-danmu'></i>
                      <span>{barrageCount}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })
      }
    </ul>
  )
}

export default RankList;
