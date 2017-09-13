import React from 'react';
import { SectionHeader, SectionItem } from './components';
import { ReadyShow } from '../../components';

const MainSectionList = ({ dataList }) => {
  return (
    <ul className='content-list'>
      {
        dataList.map((sectionListItem) => {
          let { aid, title, pic, stat: { view, danmaku } } = sectionListItem;
          let sectionItemProps = {
            key: aid,
            aid,
            title,
            pic,
            playCount: view >= 10000 ? `${(view / 10000).toFixed(1)}万` : view,
            barrageCount: danmaku >= 10000 ? `${(danmaku / 10000).toFixed(1)}万` : danmaku,
          };
          return <SectionItem {...sectionItemProps} />
        })
      }
    </ul>
  )
}

const MainSection = ({ mainList, loading, error }) => {
  return (
    <ReadyShow loading={loading} error={error} loadingMessage='正在加载大部分版块...'>
      <div>
        {
          mainList.map((section) => {
            let { title, icon, dataKey, list } = section;
            return (
              <div className='main-container' key={dataKey}>
                <SectionHeader title={title} icon={icon}>
                  <p>查看更多更新</p>
                  <span className='index-sprite index-sprite-arrow'></span> 
                </SectionHeader>
                <MainSectionList dataList={list} />
              </div>
            )
          })
        }
      </div>
    </ReadyShow>
  )
}

export default MainSection;