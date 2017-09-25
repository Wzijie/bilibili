import React from 'react';
import { LazyLoadImg } from '../../../components';

const UserItem = ({ face, username, fansCount, videoCount, sign }) => (
  <li className='user-item'>
    <a className='list-box'>
      <div className='user-face' data-img={face}>
        <LazyLoadImg url={face} />
      </div>
      <div className='user-info'>
        <p className='username'>{username}</p>
        <p>
          <span className='fans-count'>粉丝：{fansCount}</span>
          <span className='video-count'>视频：{videoCount}</span>
        </p>
        <p className='user-sign text-overflow'>{sign}</p>
      </div>
    </a>
  </li>
);

const UserList = ({ dataList = [] }) => (
  <ul className='search-result rank-list'>
    {
      dataList.map((result) => {
        let { mid, upic, uname, fans, videos, usign } = result;
        return (
          <UserItem
            key={mid}
            face={upic}
            username={uname}
            fansCount={fans}
            videoCount={videos}
            sign={usign}
          />
        );
      })
    }
  </ul>
);

export default UserList;
