import React from 'react';
import { SectionHeader, SectionItem } from './components';
import { ReadyShow } from '../../components';

const RecommendSection = ({ dataList, io, loading, error }) => {
  return (
    <div className='main-container'>      
      <SectionHeader title='热门推荐' icon='hot'>
        <span className='index-sprite index-sprite-rank'></span>  
        <p className='rank-txt'>排行榜</p>
      </SectionHeader>
      <ReadyShow loading={loading} error={error} >
        <ul className='content-list'>
          {
            dataList.map((recommend) => {

              let { aid, pic, title, play, video_review } = recommend;
              let sectionItemProps = {
                key: aid,
                aid,
                pic,
                title,
                playCount: play >= 10000 ? `${(play / 10000).toFixed(1)}万` : play,
                barrageCount: video_review >= 10000 ? `${(video_review / 10000).toFixed(1)}万` : video_review,
                io: io
              }

              return <SectionItem {...sectionItemProps} />
            })  
          }
        </ul>
      </ReadyShow>
    </div>
  )
}

export default RecommendSection;
