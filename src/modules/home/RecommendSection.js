import React from 'react';
import { SectionHeader, SectionItem } from './components';
import { ReadyShow } from '../../components';
import countFormat from '../../plugs/countFormat';

const RecommendSection = ({ dataList, loading, error }) => {
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
                playCount: countFormat(play),
                barrageCount: countFormat(video_review)
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
