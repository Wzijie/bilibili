import React from 'react';
import { Link } from 'react-router-dom';
import { addLoading } from '../../components';

const HotItem = ({ keyword, path }) => (
  <li>
    <Link to={`${path}/${keyword}`} >{keyword}</Link>
  </li>
);

const HotList = ({ dataList, path }) => (
  <ul className='hot-search-list'>
    {
      dataList.map((hotItem) => {
        let { keyword } = hotItem;
        return <HotItem key={keyword} keyword={keyword} path={path} />
      })
    }
  </ul>
);

const Hot = ({ dataList, path }) => (
  <div className='hot-search'>
    <h3 className='search-info-title'>热门搜索</h3>
    <HotList dataList={dataList} path={path} />
  </div>
);

export default addLoading(Hot);
