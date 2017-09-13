import React from 'react';
import { SectionHeader, SectionList } from './components';

const LiveSection = ({ liveSectionList }) => {
  return (
    <div>
      {
        liveSectionList.map((liveSection) => {
          let { lives, partition: { name, area, id } } = liveSection;
          lives = lives.slice(0, 4);
          return (
            <div className='main-container' key={id}>
              <SectionHeader icon={area} title={name} />
              <SectionList dataList={lives} />
            </div>
          )
        })
      }
    </div>
  )
}

export default LiveSection;