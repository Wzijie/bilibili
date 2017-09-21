import React from 'react';
import { addLoading } from '../../../components';
import VideoList from './VideoList';
import BangumiList from './BangumiList';
import UserList from './UserList';

const SwitchResult = ({ result, type }) => {
  switch (type) {
    case 'all':
      return <VideoList dataList={result.all} />;

    case 'bangumi':
      return <BangumiList dataList={result.bangumi} />;

    case 'upuser':
      return <UserList dataList={result.upuser} />;

    default: return <p className='loading-info'>没做这个搜索结果</p>;
  }
}

export default addLoading(SwitchResult);
