import React from 'react';
import { getImageUrl } from '../../../plugs/httpRequest';

const SectionList = ({ dataList }) => {
  return (
    <ul className='content-list'>
      {
        dataList.map((item) => {

          let { room_id, cover: { src }, owner: { face, name }, online, title } = item;

          return (
            <li className='content-item' key={room_id}>   
              <a href={'http://live.bilibili.com/h5/' + room_id}>
                <div className='video-cover' data-img={getImageUrl(src)}></div>
                <div className='user'>
                  <div className='face'><img src={getImageUrl(face)} alt={name} /></div>
                  <p className='name text-overflow'>{name}</p>
                </div>
                <div className='user'>
                  <div className='online'>{online}</div>
                  <p className='intro text-overflow'>{title}</p>
                </div>
              </a>      
            </li>
          )
        })
      }
    </ul>
  )
} 

export default SectionList;