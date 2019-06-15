import React from 'react';
import { Link } from 'react-router-dom';

const History = ({ dataList, onDeleteHistorySearch, path }) => (
  <div className='history-search'>
    <h3 className='search-info-title'>历史搜索</h3>
    <ul className='history-search-list'>
      {
        dataList.map((historySearch, index) => {
          return (
            <li key={historySearch}>
              <Link to={`${path}/${historySearch}`}>{historySearch}</Link>
              <i className='history-delete' onClick={onDeleteHistorySearch(index)}></i>
            </li>
          );
        })
      }
    </ul>
  </div>
);

export default History;
