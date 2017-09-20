import React from 'react';
import { getImageUrl } from '../../../plugs/httpRequest';

const BangumiItem = ({ cover, title, update }) => (
  <li className='bangumi-item'>
    <a className='list-box'>
      <div className='bangumi-cover' data-img={cover} >
        <img src={getImageUrl(`https:${cover}`)} alt="cover" />
      </div>
      <div className='bangumi-info'>
        <div className='bangumi-tag'>
          <i className='icon-bangumi'></i>
          <span>番剧</span>
        </div>
        <p className='bangumi-title'>{title}</p>
        <p className='update-info'>更新至第{update}话</p>
      </div>
    </a>
  </li>
);

const BangumiList = ({ dataList = [] }) => (
  <ul className='search-result rank-list'>
    {
      dataList.map((result) => {
        let { bangumi_id, cover, title, total_count, } = result;
        return (
          <BangumiItem
            key={bangumi_id}
            cover={cover}
            title={title}
            update={total_count}
          />
        );
      })
    }
  </ul>
);

export default BangumiList;
