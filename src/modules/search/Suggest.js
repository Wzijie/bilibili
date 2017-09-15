import React from 'react';

function filterScriptTag(str) {
  return str.replace(/<script/gi, '').replace(/<\/script>/gi, '');
}

const SuggestItem = ({ keyword, keywordHTML }) => (
  <li >
    <a dangerouslySetInnerHTML={{ __html: filterScriptTag(keywordHTML) }} ></a>
  </li>
);

const Suggest = ({ dataList }) => (
  <ul className='search-suggest'>
    {
      dataList.map((suggest, index) => {
        let { value: keyword, name: keywordHTML } = suggest;
        return <SuggestItem key={`${keyword}${index}`} keyword={keyword} keywordHTML={keywordHTML} />
      })
    }
  </ul>
);

export default Suggest;
