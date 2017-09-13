import React from 'react';
import { SectionHeader } from './components';
import { ReadyShow } from '../../components';
import { getImageUrl } from '../../plugs/httpRequest';

const LiveListItem = ({ roomid, cover, face, uname, title, online }) => {
  return (
    <li className='content-item'>   
      <a href={`http://live.bilibili.com/h5/${roomid}`}>
        <div className='video-cover' data-img={cover}></div>
        <div className='user'>
          <div className='face'><img src={getImageUrl(`https:${face}`)} alt={uname} /></div>
          <p className='name text-overflow'>{uname}</p>
        </div>
        <div className='user'>
          <div className='online'>{online}</div>
          <p className='intro text-overflow'>{title}</p>
        </div>
      </a>
    </li>
  )
}

const LiveSection = ({ dataList, loading, error }) => {
  return (
    <div className='main-container'>
      <SectionHeader title='正在直播' icon='live'>
        <p>查看更多直播</p>
        <span className='index-sprite index-sprite-arrow'></span> 
      </SectionHeader>
      <ReadyShow loading={loading} error={error} >
        <ul className='content-list'>
          {
            dataList.map((live) => {
              return <LiveListItem key={live.roomid} {...live} />
            })
          }
        </ul>
      </ReadyShow>    
    </div>
  )
}

export default LiveSection;