import React from 'react';

const Tag = ({ tagList }) => {
  return (
    <div className='video-tag'>
      <h2 className='section-title'>标签</h2>
      <ul className='tag-list'>
      {
        tagList.map((tag) => {
          let { tag_name: name } = tag;
          return (
            <li key={name}>
              <a>{name}</a>
            </li>
          ) 
        })
      }
      </ul>
    </div>
  );
}

export default Tag;
