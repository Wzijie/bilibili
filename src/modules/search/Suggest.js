import React from 'react';
import { Link } from 'react-router-dom';
import { addLoading } from '../../components';

function filterScriptTag(str) {
  return str.replace(/<script/gi, '').replace(/<\/script>/gi, '');
}

const SuggestItem = ({ keyword, keywordHTML, path }) => (
  <li >
    <Link to={`${path}/${keyword}`} dangerouslySetInnerHTML={{ __html: filterScriptTag(keywordHTML) }} ></Link>
  </li>
);

const Suggest = ({ dataList, path }) => (
  <ul className='search-suggest'>
    {
      dataList.map((suggest, index) => {
        let { value: keyword, name: keywordHTML } = suggest;
        return <SuggestItem key={`${keyword}${index}`} keyword={keyword} keywordHTML={keywordHTML} path={path} />
      })
    }
  </ul>
);

export default addLoading(Suggest);
