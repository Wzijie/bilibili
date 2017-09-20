import React from 'react';
import { addLoading } from '../../../components';
import VideoList from './VideoList';
import BangumiList from './BangumiList';
import UserList from './UserList';

const SwitchResult = ({ result, type }) => {
  switch (type) {
    case 'all':
      return <VideoList dataList={result.video} />;

    case 'bangumi':
      return <BangumiList dataList={result} />;

    case 'upuser':
      return <UserList dataList={result} />;

    default: return <div>没有这个搜索类型</div>;
  }
}

export default addLoading(SwitchResult);
