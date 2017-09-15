import React from 'react';

const HotItem = ({ keyword }) => (
  <li>
    <a>{keyword}</a>
  </li>
);

const HotList = ({ dataList }) => (
  <ul className='hot-search-list'>
    {
      dataList.map((hotItem) => {
        let { keyword } = hotItem;
        return <HotItem key={keyword} keyword={keyword} />
      })
    }
  </ul>
);

const Hot = ({ dataList }) => (
  <div className='hot-search'>
    <h3 className='search-info-title'>热门搜索</h3>
    <HotList dataList={dataList} />
  </div>
);

export default Hot;
