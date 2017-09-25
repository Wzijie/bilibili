import React from 'react';
import { getImageUrl } from '../../../plugs/httpRequest';
import { LazyLoadImg } from '../../../components';

const SectionItem = ({ roomId, cover, face, name, online, title }) => (
  <li className='content-item'>
    <a href={`http://live.bilibili.com/h5/${roomId}`}>
      <div className='video-cover' data-img={getImageUrl(cover)}>
        <LazyLoadImg url={cover} />
      </div>
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
);

const SectionList = ({ dataList }) => {
  return (
    <ul className='content-list'>
      {
        dataList.map((item) => {

          let { room_id, cover: { src }, owner: { face, name }, online, title } = item;

          return (
            <SectionItem
              key={room_id}
              roomId={room_id}
              cover={src}
              face={face}
              name={name}
              online={online}
              title={title}
            />
          );
        })
      }
    </ul>
  );
}

export default SectionList;