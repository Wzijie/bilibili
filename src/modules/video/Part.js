import React from 'react';

const NoPart = (
  <li className='on'>
    <a>1</a>
  </li>
);

const ShowMorePartBtn = ({ showAllPart, toggleShowAllPart, partCount }) => {
  if (partCount > 3) {
    return (
      <li className='display-more-part' onClick={toggleShowAllPart} >
        {
          showAllPart
            ? <a>收起</a>
            : <a>查看全部（共{partCount}P）</a>
        }
      </li>
    );
  } else {
    return false;
  }
}

const Part = ({ aid, partCount, partVisibleList, showAllPart, toggleShowAllPart, part, onSwitchPartFetchPlayer }) => {

  let PartList = partVisibleList.map((partTitle, index) => {
    return (
      <li className={part === index + 1 && 'on'} key={partTitle} onClick={onSwitchPartFetchPlayer(aid, index + 1)} >
        <a>{partTitle}</a>
      </li>
    );
  });

  return (
    <div className='video-part'>
      <ul className='part-list'>
        {
          partCount > 0
            ? PartList
            : NoPart
        }
        <ShowMorePartBtn
          showAllPart={showAllPart}
          toggleShowAllPart={toggleShowAllPart}
          partCount={partCount}
        />
      </ul>
    </div>
  )
}

export default Part;
