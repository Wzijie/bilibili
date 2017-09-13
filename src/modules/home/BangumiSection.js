import React from 'react';
import { SectionHeader } from './components';
import { ReadyShow } from '../../components';

const BangumiListItem = ({ cover, title, bgmcount }) => {
  return (
    <li className='content-item bangumi-item'>    
      <a href='###'>
        <div className='video-cover' data-img={cover}></div>
        <p className='bangumi-name text-overflow'>{title}</p>
        <p className='bangumi-update-to text-overflow'>更新至第{bgmcount}话</p>
      </a>
    </li>
  )
}

const BangumiSection = ({ dataList, loading, error }) => {
  return (
    <div className='main-container'>
      <SectionHeader title='番剧更新' icon='bangumi'>
        <p>查看更多番剧</p>
        <span className='index-sprite index-sprite-arrow'></span> 
      </SectionHeader>
      <ReadyShow loading={loading} error={error} >
        <ul className='content-list'>
          {
            dataList.map((bangumi) => {
              let { season_id, cover, title, bgmcount } = bangumi;
              // bgmcount正常是更新到第几话 '1' '12' 这样
              // 居然有 '第6话（日语）' 这样的。
              bgmcount = bgmcount.replace(/[^\d]/g, '');
              return <BangumiListItem key={season_id} cover={cover} title={title} bgmcount={bgmcount} />
            })
          }
        </ul>
      </ReadyShow>
    </div>
  )
}

export default BangumiSection;